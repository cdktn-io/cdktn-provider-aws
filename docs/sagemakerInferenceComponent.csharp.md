# `sagemakerInferenceComponent` Submodule <a name="`sagemakerInferenceComponent` Submodule" id="@cdktn/provider-aws.sagemakerInferenceComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceComponent <a name="SagemakerInferenceComponent" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component aws_sagemaker_inference_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponent(Construct Scope, string Id, SagemakerInferenceComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig">PutDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification">PutSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications">PutSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig">ResetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification">ResetSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications">ResetSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName">ResetVariantName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentConfig` <a name="PutDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig"></a>

```csharp
private void PutDeploymentConfig(IResolvable|SagemakerInferenceComponentDeploymentConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(IResolvable|SagemakerInferenceComponentRuntimeConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

---

##### `PutSpecification` <a name="PutSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification"></a>

```csharp
private void PutSpecification(IResolvable|SagemakerInferenceComponentSpecification[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

---

##### `PutSpecifications` <a name="PutSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications"></a>

```csharp
private void PutSpecifications(IResolvable|SagemakerInferenceComponentSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts"></a>

```csharp
private void PutTimeouts(SagemakerInferenceComponentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---

##### `ResetDeploymentConfig` <a name="ResetDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig"></a>

```csharp
private void ResetDeploymentConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig"></a>

```csharp
private void ResetRuntimeConfig()
```

##### `ResetSpecification` <a name="ResetSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification"></a>

```csharp
private void ResetSpecification()
```

##### `ResetSpecifications` <a name="ResetSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications"></a>

```csharp
private void ResetSpecifications()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVariantName` <a name="ResetVariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName"></a>

```csharp
private void ResetVariantName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerInferenceComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerInferenceComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerInferenceComponent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerInferenceComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerInferenceComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerInferenceComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig">DeploymentConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification">Specification</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications">Specifications</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput">DeploymentConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput">SpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput">SpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput">VariantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName">VariantName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeploymentConfig`<sup>Required</sup> <a name="DeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig"></a>

```csharp
public SagemakerInferenceComponentDeploymentConfigList DeploymentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig"></a>

```csharp
public SagemakerInferenceComponentRuntimeConfigList RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a>

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification"></a>

```csharp
public SagemakerInferenceComponentSpecificationList Specification { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a>

---

##### `Specifications`<sup>Required</sup> <a name="Specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications"></a>

```csharp
public SagemakerInferenceComponentSpecificationsList Specifications { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts"></a>

```csharp
public SagemakerInferenceComponentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a>

---

##### `DeploymentConfigInput`<sup>Optional</sup> <a name="DeploymentConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfig[] DeploymentConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentRuntimeConfig[] RuntimeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecification[] SpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

---

##### `SpecificationsInput`<sup>Optional</sup> <a name="SpecificationsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecifications[] SpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput"></a>

```csharp
public string VariantNameInput { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName"></a>

```csharp
public string VariantName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceComponentConfig <a name="SagemakerInferenceComponentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointName,
    string Name,
    IResolvable|SagemakerInferenceComponentDeploymentConfig[] DeploymentConfig = null,
    string Region = null,
    IResolvable|SagemakerInferenceComponentRuntimeConfig[] RuntimeConfig = null,
    IResolvable|SagemakerInferenceComponentSpecification[] Specification = null,
    IResolvable|SagemakerInferenceComponentSpecifications[] Specifications = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SagemakerInferenceComponentTimeouts Timeouts = null,
    string VariantName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig">DeploymentConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]</code> | deployment_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]</code> | runtime_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification">Specification</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]</code> | specification block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications">Specifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]</code> | specifications block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName">VariantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}.

---

##### `DeploymentConfig`<sup>Optional</sup> <a name="DeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfig[] DeploymentConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

deployment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#region SagemakerInferenceComponent#region}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentRuntimeConfig[] RuntimeConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}

---

##### `Specification`<sup>Optional</sup> <a name="Specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecification[] Specification { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}

---

##### `Specifications`<sup>Optional</sup> <a name="Specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecifications[] Specifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts"></a>

```csharp
public SagemakerInferenceComponentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#timeouts SagemakerInferenceComponent#timeouts}

---

##### `VariantName`<sup>Optional</sup> <a name="VariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName"></a>

```csharp
public string VariantName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}.

---

### SagemakerInferenceComponentDeploymentConfig <a name="SagemakerInferenceComponentDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfig {
    IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] AutoRollbackConfiguration = null,
    IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] RollingUpdatePolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]</code> | auto_rollback_configuration block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]</code> | rolling_update_policy block. |

---

##### `AutoRollbackConfiguration`<sup>Optional</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] AutoRollbackConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}

---

##### `RollingUpdatePolicy`<sup>Optional</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] RollingUpdatePolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

rolling_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
    IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] Alarms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms">Alarms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | alarms block. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] Alarms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
    string AlarmName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">AlarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}. |

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```csharp
public string AlarmName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
    double WaitIntervalInSeconds,
    IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] MaximumBatchSize = null,
    double MaximumExecutionTimeoutInSeconds = null,
    IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] RollbackMaximumBatchSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">MaximumBatchSize</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]</code> | maximum_batch_size block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]</code> | rollback_maximum_batch_size block. |

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds"></a>

```csharp
public double WaitIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}.

---

##### `MaximumBatchSize`<sup>Optional</sup> <a name="MaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] MaximumBatchSize { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```csharp
public double MaximumExecutionTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}.

---

##### `RollbackMaximumBatchSize`<sup>Optional</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] RollbackMaximumBatchSize { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

rollback_maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentRuntimeConfig <a name="SagemakerInferenceComponentRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentRuntimeConfig {
    double CopyCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount">CopyCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}. |

---

##### `CopyCount`<sup>Required</sup> <a name="CopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount"></a>

```csharp
public double CopyCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}.

---

### SagemakerInferenceComponentRuntimeConfigPlacementStatus <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentRuntimeConfigPlacementStatus {

};
```


### SagemakerInferenceComponentSpecification <a name="SagemakerInferenceComponentSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecification {
    string BaseInferenceComponentName = null,
    IResolvable|SagemakerInferenceComponentSpecificationComputeResourceRequirements[] ComputeResourceRequirements = null,
    IResolvable|SagemakerInferenceComponentSpecificationContainer[] Container = null,
    IResolvable|SagemakerInferenceComponentSpecificationDataCacheConfig[] DataCacheConfig = null,
    string InstanceType = null,
    string ModelName = null,
    IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfig[] SchedulingConfig = null,
    IResolvable|SagemakerInferenceComponentSpecificationStartupParameters[] StartupParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container">Container</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig">DataCacheConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig">SchedulingConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters">StartupParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]</code> | startup_parameters block. |

---

##### `BaseInferenceComponentName`<sup>Optional</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName"></a>

```csharp
public string BaseInferenceComponentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `ComputeResourceRequirements`<sup>Optional</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationComputeResourceRequirements[] ComputeResourceRequirements { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainer[] Container { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `DataCacheConfig`<sup>Optional</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationDataCacheConfig[] DataCacheConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfig[] SchedulingConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `StartupParameters`<sup>Optional</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationStartupParameters[] StartupParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationComputeResourceRequirements {
    double MinMemoryRequiredInMb,
    double MaxMemoryRequiredInMb = null,
    double NumberOfAcceleratorDevicesRequired = null,
    double NumberOfCpuCoresRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```csharp
public double MinMemoryRequiredInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `MaxMemoryRequiredInMb`<sup>Optional</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```csharp
public double MaxMemoryRequiredInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```csharp
public double NumberOfAcceleratorDevicesRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `NumberOfCpuCoresRequired`<sup>Optional</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```csharp
public double NumberOfCpuCoresRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationContainer <a name="SagemakerInferenceComponentSpecificationContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainer {
    string ArtifactUrl = null,
    IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] ContainerMetricsConfig = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    string Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl">ArtifactUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `ArtifactUrl`<sup>Optional</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl"></a>

```csharp
public string ArtifactUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `ContainerMetricsConfig`<sup>Optional</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] ContainerMetricsConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig {
    IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] MetricsEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint">MetricsEndpoint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | metrics_endpoint block. |

---

##### `MetricsEndpoint`<sup>Optional</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] MetricsEndpoint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint {
    string MetricsEndpointPath,
    double MetricPublishFrequencyInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```csharp
public string MetricsEndpointPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `MetricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```csharp
public double MetricPublishFrequencyInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationDataCacheConfig <a name="SagemakerInferenceComponentSpecificationDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationDataCacheConfig {
    bool|IResolvable EnableCaching
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching">EnableCaching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching"></a>

```csharp
public bool|IResolvable EnableCaching { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecifications <a name="SagemakerInferenceComponentSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecifications {
    string BaseInferenceComponentName = null,
    IResolvable|SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] ComputeResourceRequirements = null,
    IResolvable|SagemakerInferenceComponentSpecificationsContainer[] Container = null,
    IResolvable|SagemakerInferenceComponentSpecificationsDataCacheConfig[] DataCacheConfig = null,
    string InstanceType = null,
    string ModelName = null,
    IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfig[] SchedulingConfig = null,
    IResolvable|SagemakerInferenceComponentSpecificationsStartupParameters[] StartupParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container">Container</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig">DataCacheConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig">SchedulingConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters">StartupParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]</code> | startup_parameters block. |

---

##### `BaseInferenceComponentName`<sup>Optional</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName"></a>

```csharp
public string BaseInferenceComponentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `ComputeResourceRequirements`<sup>Optional</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] ComputeResourceRequirements { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainer[] Container { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `DataCacheConfig`<sup>Optional</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsDataCacheConfig[] DataCacheConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfig[] SchedulingConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `StartupParameters`<sup>Optional</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsStartupParameters[] StartupParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationSchedulingConfig <a name="SagemakerInferenceComponentSpecificationSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationSchedulingConfig {
    string PlacementStrategy,
    IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] AvailabilityZoneBalance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy">PlacementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]</code> | availability_zone_balance block. |

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy"></a>

```csharp
public string PlacementStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `AvailabilityZoneBalance`<sup>Optional</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] AvailabilityZoneBalance { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance {
    string EnforcementMode,
    double MaxImbalance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">MaxImbalance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `MaxImbalance`<sup>Optional</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```csharp
public double MaxImbalance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsComputeResourceRequirements {
    double MinMemoryRequiredInMb,
    double MaxMemoryRequiredInMb = null,
    double NumberOfAcceleratorDevicesRequired = null,
    double NumberOfCpuCoresRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```csharp
public double MinMemoryRequiredInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `MaxMemoryRequiredInMb`<sup>Optional</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```csharp
public double MaxMemoryRequiredInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```csharp
public double NumberOfAcceleratorDevicesRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `NumberOfCpuCoresRequired`<sup>Optional</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```csharp
public double NumberOfCpuCoresRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationsContainer <a name="SagemakerInferenceComponentSpecificationsContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainer {
    string ArtifactUrl = null,
    IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] ContainerMetricsConfig = null,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    string Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl">ArtifactUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `ArtifactUrl`<sup>Optional</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl"></a>

```csharp
public string ArtifactUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `ContainerMetricsConfig`<sup>Optional</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] ContainerMetricsConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig {
    IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] MetricsEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint">MetricsEndpoint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | metrics_endpoint block. |

---

##### `MetricsEndpoint`<sup>Optional</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] MetricsEndpoint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint {
    string MetricsEndpointPath,
    double MetricPublishFrequencyInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```csharp
public string MetricsEndpointPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `MetricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```csharp
public double MetricPublishFrequencyInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationsDataCacheConfig <a name="SagemakerInferenceComponentSpecificationsDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsDataCacheConfig {
    bool|IResolvable EnableCaching
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching">EnableCaching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching"></a>

```csharp
public bool|IResolvable EnableCaching { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecificationsSchedulingConfig <a name="SagemakerInferenceComponentSpecificationsSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsSchedulingConfig {
    string PlacementStrategy,
    IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] AvailabilityZoneBalance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy">PlacementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]</code> | availability_zone_balance block. |

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy"></a>

```csharp
public string PlacementStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `AvailabilityZoneBalance`<sup>Optional</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] AvailabilityZoneBalance { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance {
    string EnforcementMode,
    double MaxImbalance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">MaxImbalance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `MaxImbalance`<sup>Optional</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```csharp
public double MaxImbalance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsStartupParameters <a name="SagemakerInferenceComponentSpecificationsStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsStartupParameters {
    double ContainerStartupHealthCheckTimeoutInSeconds = null,
    double ModelDataDownloadTimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentSpecificationStartupParameters <a name="SagemakerInferenceComponentSpecificationStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationStartupParameters {
    double ContainerStartupHealthCheckTimeoutInSeconds = null,
    double ModelDataDownloadTimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentTimeouts <a name="SagemakerInferenceComponentTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#create SagemakerInferenceComponent#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#delete SagemakerInferenceComponent#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#update SagemakerInferenceComponent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```csharp
private SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">AlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```csharp
public string AlarmNameInput { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get"></a>

```csharp
private SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```csharp
private void PutAlarms(IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```csharp
public SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList Alarms { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] AlarmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerInferenceComponentDeploymentConfigList <a name="SagemakerInferenceComponentDeploymentConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get"></a>

```csharp
private SagemakerInferenceComponentDeploymentConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

---


### SagemakerInferenceComponentDeploymentConfigOutputReference <a name="SagemakerInferenceComponentDeploymentConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration">PutAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy">PutRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration">ResetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy">ResetRollingUpdatePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoRollbackConfiguration` <a name="PutAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```csharp
private void PutAutoRollbackConfiguration(IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

---

##### `PutRollingUpdatePolicy` <a name="PutRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```csharp
private void PutRollingUpdatePolicy(IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

---

##### `ResetAutoRollbackConfiguration` <a name="ResetAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```csharp
private void ResetAutoRollbackConfiguration()
```

##### `ResetRollingUpdatePolicy` <a name="ResetRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```csharp
private void ResetRollingUpdatePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy">RollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">AutoRollbackConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">RollingUpdatePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```csharp
public SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList AutoRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `RollingUpdatePolicy`<sup>Required</sup> <a name="RollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```csharp
public SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList RollingUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a>

---

##### `AutoRollbackConfigurationInput`<sup>Optional</sup> <a name="AutoRollbackConfigurationInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[] AutoRollbackConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

---

##### `RollingUpdatePolicyInput`<sup>Optional</sup> <a name="RollingUpdatePolicyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] RollingUpdatePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get"></a>

```csharp
private SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get"></a>

```csharp
private SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">PutMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">PutRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">ResetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">ResetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">ResetRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumBatchSize` <a name="PutMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```csharp
private void PutMaximumBatchSize(IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

---

##### `PutRollbackMaximumBatchSize` <a name="PutRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```csharp
private void PutRollbackMaximumBatchSize(IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

---

##### `ResetMaximumBatchSize` <a name="ResetMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```csharp
private void ResetMaximumBatchSize()
```

##### `ResetMaximumExecutionTimeoutInSeconds` <a name="ResetMaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```csharp
private void ResetMaximumExecutionTimeoutInSeconds()
```

##### `ResetRollbackMaximumBatchSize` <a name="ResetRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```csharp
private void ResetRollbackMaximumBatchSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">MaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">RollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">MaximumBatchSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">MaximumExecutionTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">RollbackMaximumBatchSizeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput">WaitIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">MaximumExecutionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">WaitIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBatchSize`<sup>Required</sup> <a name="MaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```csharp
public SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList MaximumBatchSize { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a>

---

##### `RollbackMaximumBatchSize`<sup>Required</sup> <a name="RollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```csharp
public SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList RollbackMaximumBatchSize { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a>

---

##### `MaximumBatchSizeInput`<sup>Optional</sup> <a name="MaximumBatchSizeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[] MaximumBatchSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

---

##### `MaximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="MaximumExecutionTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```csharp
public double MaximumExecutionTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `RollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="RollbackMaximumBatchSizeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] RollbackMaximumBatchSizeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

---

##### `WaitIntervalInSecondsInput`<sup>Optional</sup> <a name="WaitIntervalInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput"></a>

```csharp
public double WaitIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `MaximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="MaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```csharp
public double MaximumExecutionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `WaitIntervalInSeconds`<sup>Required</sup> <a name="WaitIntervalInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```csharp
public double WaitIntervalInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get"></a>

```csharp
private SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerInferenceComponentRuntimeConfigList <a name="SagemakerInferenceComponentRuntimeConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentRuntimeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get"></a>

```csharp
private SagemakerInferenceComponentRuntimeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentRuntimeConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

---


### SagemakerInferenceComponentRuntimeConfigOutputReference <a name="SagemakerInferenceComponentRuntimeConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount">CurrentCopyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount">DesiredCopyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus">PlacementStatus</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput">CopyCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount">CopyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentCopyCount`<sup>Required</sup> <a name="CurrentCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount"></a>

```csharp
public double CurrentCopyCount { get; }
```

- *Type:* double

---

##### `DesiredCopyCount`<sup>Required</sup> <a name="DesiredCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount"></a>

```csharp
public double DesiredCopyCount { get; }
```

- *Type:* double

---

##### `PlacementStatus`<sup>Required</sup> <a name="PlacementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus"></a>

```csharp
public SagemakerInferenceComponentRuntimeConfigPlacementStatusList PlacementStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a>

---

##### `CopyCountInput`<sup>Optional</sup> <a name="CopyCountInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput"></a>

```csharp
public double CopyCountInput { get; }
```

- *Type:* double

---

##### `CopyCount`<sup>Required</sup> <a name="CopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount"></a>

```csharp
public double CopyCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentRuntimeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusList <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentRuntimeConfigPlacementStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get"></a>

```csharp
private SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount">CurrentCopyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentCopyCount`<sup>Required</sup> <a name="CurrentCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount"></a>

```csharp
public double CurrentCopyCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue"></a>

```csharp
public SagemakerInferenceComponentRuntimeConfigPlacementStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a>

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationComputeResourceRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationComputeResourceRequirements[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">ResetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">ResetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">ResetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryRequiredInMb` <a name="ResetMaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```csharp
private void ResetMaxMemoryRequiredInMb()
```

##### `ResetNumberOfAcceleratorDevicesRequired` <a name="ResetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```csharp
private void ResetNumberOfAcceleratorDevicesRequired()
```

##### `ResetNumberOfCpuCoresRequired` <a name="ResetNumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```csharp
private void ResetNumberOfCpuCoresRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">MaxMemoryRequiredInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">MinMemoryRequiredInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">NumberOfAcceleratorDevicesRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">NumberOfCpuCoresRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MaxMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```csharp
public double MaxMemoryRequiredInMbInput { get; }
```

- *Type:* double

---

##### `MinMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MinMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```csharp
public double MinMemoryRequiredInMbInput { get; }
```

- *Type:* double

---

##### `NumberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```csharp
public double NumberOfAcceleratorDevicesRequiredInput { get; }
```

- *Type:* double

---

##### `NumberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="NumberOfCpuCoresRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```csharp
public double NumberOfCpuCoresRequiredInput { get; }
```

- *Type:* double

---

##### `MaxMemoryRequiredInMb`<sup>Required</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```csharp
public double MaxMemoryRequiredInMb { get; }
```

- *Type:* double

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```csharp
public double MinMemoryRequiredInMb { get; }
```

- *Type:* double

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```csharp
public double NumberOfAcceleratorDevicesRequired { get; }
```

- *Type:* double

---

##### `NumberOfCpuCoresRequired`<sup>Required</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```csharp
public double NumberOfCpuCoresRequired { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationComputeResourceRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">ResetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricPublishFrequencyInSeconds` <a name="ResetMetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```csharp
private void ResetMetricPublishFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">MetricPublishFrequencyInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">MetricsEndpointPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="MetricPublishFrequencyInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```csharp
public double MetricPublishFrequencyInSecondsInput { get; }
```

- *Type:* double

---

##### `MetricsEndpointPathInput`<sup>Optional</sup> <a name="MetricsEndpointPathInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```csharp
public string MetricsEndpointPathInput { get; }
```

- *Type:* string

---

##### `MetricPublishFrequencyInSeconds`<sup>Required</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```csharp
public double MetricPublishFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```csharp
public string MetricsEndpointPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">PutMetricsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">ResetMetricsEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricsEndpoint` <a name="PutMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```csharp
private void PutMetricsEndpoint(IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `ResetMetricsEndpoint` <a name="ResetMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```csharp
private void ResetMetricsEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">MetricsEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">MetricsEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsEndpoint`<sup>Required</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```csharp
public SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList MetricsEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `MetricsEndpointInput`<sup>Optional</sup> <a name="MetricsEndpointInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[] MetricsEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>

---


### SagemakerInferenceComponentSpecificationContainerList <a name="SagemakerInferenceComponentSpecificationContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainer[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

---


### SagemakerInferenceComponentSpecificationContainerOutputReference <a name="SagemakerInferenceComponentSpecificationContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig">PutContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl">ResetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig">ResetContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerMetricsConfig` <a name="PutContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig"></a>

```csharp
private void PutContainerMetricsConfig(IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

---

##### `ResetArtifactUrl` <a name="ResetArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl"></a>

```csharp
private void ResetArtifactUrl()
```

##### `ResetContainerMetricsConfig` <a name="ResetContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig"></a>

```csharp
private void ResetContainerMetricsConfig()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage">ResolvedImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput">ArtifactUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput">ContainerMetricsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl">ArtifactUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerMetricsConfig`<sup>Required</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig"></a>

```csharp
public SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList ContainerMetricsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a>

---

##### `ResolvedImage`<sup>Required</sup> <a name="ResolvedImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage"></a>

```csharp
public string ResolvedImage { get; }
```

- *Type:* string

---

##### `ArtifactUrlInput`<sup>Optional</sup> <a name="ArtifactUrlInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput"></a>

```csharp
public string ArtifactUrlInput { get; }
```

- *Type:* string

---

##### `ContainerMetricsConfigInput`<sup>Optional</sup> <a name="ContainerMetricsConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[] ContainerMetricsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ArtifactUrl`<sup>Required</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl"></a>

```csharp
public string ArtifactUrl { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>

---


### SagemakerInferenceComponentSpecificationDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationDataCacheConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationDataCacheConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

---


### SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput">EnableCachingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching">EnableCaching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCachingInput`<sup>Optional</sup> <a name="EnableCachingInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput"></a>

```csharp
public bool|IResolvable EnableCachingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching"></a>

```csharp
public bool|IResolvable EnableCaching { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationDataCacheConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>

---


### SagemakerInferenceComponentSpecificationList <a name="SagemakerInferenceComponentSpecificationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecification[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

---


### SagemakerInferenceComponentSpecificationOutputReference <a name="SagemakerInferenceComponentSpecificationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements">PutComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig">PutDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters">PutStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName">ResetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements">ResetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig">ResetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters">ResetStartupParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeResourceRequirements` <a name="PutComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements"></a>

```csharp
private void PutComputeResourceRequirements(IResolvable|SagemakerInferenceComponentSpecificationComputeResourceRequirements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer"></a>

```csharp
private void PutContainer(IResolvable|SagemakerInferenceComponentSpecificationContainer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

---

##### `PutDataCacheConfig` <a name="PutDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig"></a>

```csharp
private void PutDataCacheConfig(IResolvable|SagemakerInferenceComponentSpecificationDataCacheConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig"></a>

```csharp
private void PutSchedulingConfig(IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

---

##### `PutStartupParameters` <a name="PutStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters"></a>

```csharp
private void PutStartupParameters(IResolvable|SagemakerInferenceComponentSpecificationStartupParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

---

##### `ResetBaseInferenceComponentName` <a name="ResetBaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName"></a>

```csharp
private void ResetBaseInferenceComponentName()
```

##### `ResetComputeResourceRequirements` <a name="ResetComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements"></a>

```csharp
private void ResetComputeResourceRequirements()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetDataCacheConfig` <a name="ResetDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig"></a>

```csharp
private void ResetDataCacheConfig()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig"></a>

```csharp
private void ResetSchedulingConfig()
```

##### `ResetStartupParameters` <a name="ResetStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters"></a>

```csharp
private void ResetStartupParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters">StartupParameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput">BaseInferenceComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput">ComputeResourceRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput">ContainerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput">DataCacheConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput">StartupParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeResourceRequirements`<sup>Required</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements"></a>

```csharp
public SagemakerInferenceComponentSpecificationComputeResourceRequirementsList ComputeResourceRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container"></a>

```csharp
public SagemakerInferenceComponentSpecificationContainerList Container { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a>

---

##### `DataCacheConfig`<sup>Required</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig"></a>

```csharp
public SagemakerInferenceComponentSpecificationDataCacheConfigList DataCacheConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a>

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig"></a>

```csharp
public SagemakerInferenceComponentSpecificationSchedulingConfigList SchedulingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a>

---

##### `StartupParameters`<sup>Required</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters"></a>

```csharp
public SagemakerInferenceComponentSpecificationStartupParametersList StartupParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a>

---

##### `BaseInferenceComponentNameInput`<sup>Optional</sup> <a name="BaseInferenceComponentNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput"></a>

```csharp
public string BaseInferenceComponentNameInput { get; }
```

- *Type:* string

---

##### `ComputeResourceRequirementsInput`<sup>Optional</sup> <a name="ComputeResourceRequirementsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationComputeResourceRequirements[] ComputeResourceRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationContainer[] ContainerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

---

##### `DataCacheConfigInput`<sup>Optional</sup> <a name="DataCacheConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationDataCacheConfig[] DataCacheConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfig[] SchedulingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

---

##### `StartupParametersInput`<sup>Optional</sup> <a name="StartupParametersInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationStartupParameters[] StartupParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

---

##### `BaseInferenceComponentName`<sup>Required</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName"></a>

```csharp
public string BaseInferenceComponentName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">ResetMaxImbalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxImbalance` <a name="ResetMaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```csharp
private void ResetMaxImbalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">MaxImbalanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">MaxImbalance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```csharp
public string EnforcementModeInput { get; }
```

- *Type:* string

---

##### `MaxImbalanceInput`<sup>Optional</sup> <a name="MaxImbalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```csharp
public double MaxImbalanceInput { get; }
```

- *Type:* double

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; }
```

- *Type:* string

---

##### `MaxImbalance`<sup>Required</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```csharp
public double MaxImbalance { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>

---


### SagemakerInferenceComponentSpecificationSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationSchedulingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

---


### SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance">PutAvailabilityZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance">ResetAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityZoneBalance` <a name="PutAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```csharp
private void PutAvailabilityZoneBalance(IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `ResetAvailabilityZoneBalance` <a name="ResetAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```csharp
private void ResetAvailabilityZoneBalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">AvailabilityZoneBalanceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput">PlacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy">PlacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneBalance`<sup>Required</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```csharp
public SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList AvailabilityZoneBalance { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `AvailabilityZoneBalanceInput`<sup>Optional</sup> <a name="AvailabilityZoneBalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[] AvailabilityZoneBalanceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `PlacementStrategyInput`<sup>Optional</sup> <a name="PlacementStrategyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```csharp
public string PlacementStrategyInput { get; }
```

- *Type:* string

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy"></a>

```csharp
public string PlacementStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationSchedulingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">ResetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">ResetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">ResetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryRequiredInMb` <a name="ResetMaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```csharp
private void ResetMaxMemoryRequiredInMb()
```

##### `ResetNumberOfAcceleratorDevicesRequired` <a name="ResetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```csharp
private void ResetNumberOfAcceleratorDevicesRequired()
```

##### `ResetNumberOfCpuCoresRequired` <a name="ResetNumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```csharp
private void ResetNumberOfCpuCoresRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">MaxMemoryRequiredInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">MinMemoryRequiredInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">NumberOfAcceleratorDevicesRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">NumberOfCpuCoresRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">MaxMemoryRequiredInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">MinMemoryRequiredInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">NumberOfAcceleratorDevicesRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">NumberOfCpuCoresRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MaxMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```csharp
public double MaxMemoryRequiredInMbInput { get; }
```

- *Type:* double

---

##### `MinMemoryRequiredInMbInput`<sup>Optional</sup> <a name="MinMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```csharp
public double MinMemoryRequiredInMbInput { get; }
```

- *Type:* double

---

##### `NumberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="NumberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```csharp
public double NumberOfAcceleratorDevicesRequiredInput { get; }
```

- *Type:* double

---

##### `NumberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="NumberOfCpuCoresRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```csharp
public double NumberOfCpuCoresRequiredInput { get; }
```

- *Type:* double

---

##### `MaxMemoryRequiredInMb`<sup>Required</sup> <a name="MaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```csharp
public double MaxMemoryRequiredInMb { get; }
```

- *Type:* double

---

##### `MinMemoryRequiredInMb`<sup>Required</sup> <a name="MinMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```csharp
public double MinMemoryRequiredInMb { get; }
```

- *Type:* double

---

##### `NumberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="NumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```csharp
public double NumberOfAcceleratorDevicesRequired { get; }
```

- *Type:* double

---

##### `NumberOfCpuCoresRequired`<sup>Required</sup> <a name="NumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```csharp
public double NumberOfCpuCoresRequired { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsComputeResourceRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">ResetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricPublishFrequencyInSeconds` <a name="ResetMetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```csharp
private void ResetMetricPublishFrequencyInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">MetricPublishFrequencyInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">MetricsEndpointPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">MetricPublishFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">MetricsEndpointPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="MetricPublishFrequencyInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```csharp
public double MetricPublishFrequencyInSecondsInput { get; }
```

- *Type:* double

---

##### `MetricsEndpointPathInput`<sup>Optional</sup> <a name="MetricsEndpointPathInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```csharp
public string MetricsEndpointPathInput { get; }
```

- *Type:* string

---

##### `MetricPublishFrequencyInSeconds`<sup>Required</sup> <a name="MetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```csharp
public double MetricPublishFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `MetricsEndpointPath`<sup>Required</sup> <a name="MetricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```csharp
public string MetricsEndpointPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">PutMetricsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">ResetMetricsEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricsEndpoint` <a name="PutMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```csharp
private void PutMetricsEndpoint(IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `ResetMetricsEndpoint` <a name="ResetMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```csharp
private void ResetMetricsEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">MetricsEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">MetricsEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsEndpoint`<sup>Required</sup> <a name="MetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```csharp
public SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList MetricsEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `MetricsEndpointInput`<sup>Optional</sup> <a name="MetricsEndpointInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[] MetricsEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>

---


### SagemakerInferenceComponentSpecificationsContainerList <a name="SagemakerInferenceComponentSpecificationsContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainer[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

---


### SagemakerInferenceComponentSpecificationsContainerOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig">PutContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl">ResetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig">ResetContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerMetricsConfig` <a name="PutContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig"></a>

```csharp
private void PutContainerMetricsConfig(IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

---

##### `ResetArtifactUrl` <a name="ResetArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl"></a>

```csharp
private void ResetArtifactUrl()
```

##### `ResetContainerMetricsConfig` <a name="ResetContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig"></a>

```csharp
private void ResetContainerMetricsConfig()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig">ContainerMetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage">ResolvedImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput">ArtifactUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput">ContainerMetricsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl">ArtifactUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerMetricsConfig`<sup>Required</sup> <a name="ContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig"></a>

```csharp
public SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList ContainerMetricsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a>

---

##### `ResolvedImage`<sup>Required</sup> <a name="ResolvedImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage"></a>

```csharp
public string ResolvedImage { get; }
```

- *Type:* string

---

##### `ArtifactUrlInput`<sup>Optional</sup> <a name="ArtifactUrlInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput"></a>

```csharp
public string ArtifactUrlInput { get; }
```

- *Type:* string

---

##### `ContainerMetricsConfigInput`<sup>Optional</sup> <a name="ContainerMetricsConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[] ContainerMetricsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ArtifactUrl`<sup>Required</sup> <a name="ArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl"></a>

```csharp
public string ArtifactUrl { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsDataCacheConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsDataCacheConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput">EnableCachingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching">EnableCaching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCachingInput`<sup>Optional</sup> <a name="EnableCachingInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput"></a>

```csharp
public bool|IResolvable EnableCachingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCaching`<sup>Required</sup> <a name="EnableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching"></a>

```csharp
public bool|IResolvable EnableCaching { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsDataCacheConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>

---


### SagemakerInferenceComponentSpecificationsList <a name="SagemakerInferenceComponentSpecificationsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

---


### SagemakerInferenceComponentSpecificationsOutputReference <a name="SagemakerInferenceComponentSpecificationsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements">PutComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig">PutDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters">PutStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName">ResetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements">ResetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig">ResetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters">ResetStartupParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeResourceRequirements` <a name="PutComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements"></a>

```csharp
private void PutComputeResourceRequirements(IResolvable|SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer"></a>

```csharp
private void PutContainer(IResolvable|SagemakerInferenceComponentSpecificationsContainer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

---

##### `PutDataCacheConfig` <a name="PutDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig"></a>

```csharp
private void PutDataCacheConfig(IResolvable|SagemakerInferenceComponentSpecificationsDataCacheConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig"></a>

```csharp
private void PutSchedulingConfig(IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

---

##### `PutStartupParameters` <a name="PutStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters"></a>

```csharp
private void PutStartupParameters(IResolvable|SagemakerInferenceComponentSpecificationsStartupParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

---

##### `ResetBaseInferenceComponentName` <a name="ResetBaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName"></a>

```csharp
private void ResetBaseInferenceComponentName()
```

##### `ResetComputeResourceRequirements` <a name="ResetComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements"></a>

```csharp
private void ResetComputeResourceRequirements()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetDataCacheConfig` <a name="ResetDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig"></a>

```csharp
private void ResetDataCacheConfig()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig"></a>

```csharp
private void ResetSchedulingConfig()
```

##### `ResetStartupParameters` <a name="ResetStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters"></a>

```csharp
private void ResetStartupParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements">ComputeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container">Container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig">DataCacheConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters">StartupParameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput">BaseInferenceComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput">ComputeResourceRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput">ContainerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput">DataCacheConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput">StartupParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName">BaseInferenceComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeResourceRequirements`<sup>Required</sup> <a name="ComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements"></a>

```csharp
public SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList ComputeResourceRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container"></a>

```csharp
public SagemakerInferenceComponentSpecificationsContainerList Container { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a>

---

##### `DataCacheConfig`<sup>Required</sup> <a name="DataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig"></a>

```csharp
public SagemakerInferenceComponentSpecificationsDataCacheConfigList DataCacheConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a>

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig"></a>

```csharp
public SagemakerInferenceComponentSpecificationsSchedulingConfigList SchedulingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a>

---

##### `StartupParameters`<sup>Required</sup> <a name="StartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters"></a>

```csharp
public SagemakerInferenceComponentSpecificationsStartupParametersList StartupParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a>

---

##### `BaseInferenceComponentNameInput`<sup>Optional</sup> <a name="BaseInferenceComponentNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput"></a>

```csharp
public string BaseInferenceComponentNameInput { get; }
```

- *Type:* string

---

##### `ComputeResourceRequirementsInput`<sup>Optional</sup> <a name="ComputeResourceRequirementsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsComputeResourceRequirements[] ComputeResourceRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsContainer[] ContainerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

---

##### `DataCacheConfigInput`<sup>Optional</sup> <a name="DataCacheConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsDataCacheConfig[] DataCacheConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfig[] SchedulingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

---

##### `StartupParametersInput`<sup>Optional</sup> <a name="StartupParametersInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsStartupParameters[] StartupParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

---

##### `BaseInferenceComponentName`<sup>Required</sup> <a name="BaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName"></a>

```csharp
public string BaseInferenceComponentName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">ResetMaxImbalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxImbalance` <a name="ResetMaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```csharp
private void ResetMaxImbalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">MaxImbalanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">MaxImbalance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```csharp
public string EnforcementModeInput { get; }
```

- *Type:* string

---

##### `MaxImbalanceInput`<sup>Optional</sup> <a name="MaxImbalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```csharp
public double MaxImbalanceInput { get; }
```

- *Type:* double

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; }
```

- *Type:* string

---

##### `MaxImbalance`<sup>Required</sup> <a name="MaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```csharp
public double MaxImbalance { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsSchedulingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance">PutAvailabilityZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance">ResetAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityZoneBalance` <a name="PutAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```csharp
private void PutAvailabilityZoneBalance(IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `ResetAvailabilityZoneBalance` <a name="ResetAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```csharp
private void ResetAvailabilityZoneBalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance">AvailabilityZoneBalance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">AvailabilityZoneBalanceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput">PlacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy">PlacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneBalance`<sup>Required</sup> <a name="AvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```csharp
public SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList AvailabilityZoneBalance { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `AvailabilityZoneBalanceInput`<sup>Optional</sup> <a name="AvailabilityZoneBalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[] AvailabilityZoneBalanceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `PlacementStrategyInput`<sup>Optional</sup> <a name="PlacementStrategyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```csharp
public string PlacementStrategyInput { get; }
```

- *Type:* string

---

##### `PlacementStrategy`<sup>Required</sup> <a name="PlacementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy"></a>

```csharp
public string PlacementStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsSchedulingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>

---


### SagemakerInferenceComponentSpecificationsStartupParametersList <a name="SagemakerInferenceComponentSpecificationsStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsStartupParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationsStartupParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsStartupParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

---


### SagemakerInferenceComponentSpecificationsStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationsStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationsStartupParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
private void ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```csharp
private void ResetModelDataDownloadTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```csharp
public double ModelDataDownloadTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationsStartupParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>

---


### SagemakerInferenceComponentSpecificationStartupParametersList <a name="SagemakerInferenceComponentSpecificationStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationStartupParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get"></a>

```csharp
private SagemakerInferenceComponentSpecificationStartupParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationStartupParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

---


### SagemakerInferenceComponentSpecificationStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentSpecificationStartupParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
private void ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```csharp
private void ResetModelDataDownloadTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```csharp
public double ModelDataDownloadTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentSpecificationStartupParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>

---


### SagemakerInferenceComponentTimeoutsOutputReference <a name="SagemakerInferenceComponentTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerInferenceComponentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerInferenceComponentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---



