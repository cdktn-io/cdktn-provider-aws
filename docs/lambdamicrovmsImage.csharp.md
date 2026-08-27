# `lambdamicrovmsImage` Submodule <a name="`lambdamicrovmsImage` Submodule" id="@cdktn/provider-aws.lambdamicrovmsImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsImage <a name="LambdamicrovmsImage" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image aws_lambdamicrovms_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImage(Construct Scope, string Id, LambdamicrovmsImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig">LambdamicrovmsImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig">LambdamicrovmsImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact">PutCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration">PutCpuConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities">ResetAdditionalOsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion">ResetBaseImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact">ResetCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration">ResetCpuConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors">ResetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCodeArtifact` <a name="PutCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact"></a>

```csharp
private void PutCodeArtifact(IResolvable|LambdamicrovmsImageCodeArtifact[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

---

##### `PutCpuConfiguration` <a name="PutCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration"></a>

```csharp
private void PutCpuConfiguration(IResolvable|LambdamicrovmsImageCpuConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts"></a>

```csharp
private void PutTimeouts(LambdamicrovmsImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `ResetAdditionalOsCapabilities` <a name="ResetAdditionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities"></a>

```csharp
private void ResetAdditionalOsCapabilities()
```

##### `ResetBaseImageVersion` <a name="ResetBaseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion"></a>

```csharp
private void ResetBaseImageVersion()
```

##### `ResetCodeArtifact` <a name="ResetCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact"></a>

```csharp
private void ResetCodeArtifact()
```

##### `ResetCpuConfiguration` <a name="ResetCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration"></a>

```csharp
private void ResetCpuConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEgressNetworkConnectors` <a name="ResetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors"></a>

```csharp
private void ResetEgressNetworkConnectors()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdamicrovmsImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdamicrovmsImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration">CpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion">ImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion">LatestActiveImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion">LatestFailedImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput">AdditionalOsCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput">BaseImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput">BaseImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput">BuildRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput">CodeArtifactInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput">CpuConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput">EgressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn">BaseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion">BaseImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn">BuildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact"></a>

```csharp
public LambdamicrovmsImageCodeArtifactList CodeArtifact { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a>

---

##### `CpuConfiguration`<sup>Required</sup> <a name="CpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration"></a>

```csharp
public LambdamicrovmsImageCpuConfigurationList CpuConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion"></a>

```csharp
public string ImageVersion { get; }
```

- *Type:* string

---

##### `LatestActiveImageVersion`<sup>Required</sup> <a name="LatestActiveImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion"></a>

```csharp
public string LatestActiveImageVersion { get; }
```

- *Type:* string

---

##### `LatestFailedImageVersion`<sup>Required</sup> <a name="LatestFailedImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion"></a>

```csharp
public string LatestFailedImageVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts"></a>

```csharp
public LambdamicrovmsImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AdditionalOsCapabilitiesInput`<sup>Optional</sup> <a name="AdditionalOsCapabilitiesInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput"></a>

```csharp
public string[] AdditionalOsCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `BaseImageArnInput`<sup>Optional</sup> <a name="BaseImageArnInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput"></a>

```csharp
public string BaseImageArnInput { get; }
```

- *Type:* string

---

##### `BaseImageVersionInput`<sup>Optional</sup> <a name="BaseImageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput"></a>

```csharp
public string BaseImageVersionInput { get; }
```

- *Type:* string

---

##### `BuildRoleArnInput`<sup>Optional</sup> <a name="BuildRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput"></a>

```csharp
public string BuildRoleArnInput { get; }
```

- *Type:* string

---

##### `CodeArtifactInput`<sup>Optional</sup> <a name="CodeArtifactInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput"></a>

```csharp
public IResolvable|LambdamicrovmsImageCodeArtifact[] CodeArtifactInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

---

##### `CpuConfigurationInput`<sup>Optional</sup> <a name="CpuConfigurationInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput"></a>

```csharp
public IResolvable|LambdamicrovmsImageCpuConfiguration[] CpuConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EgressNetworkConnectorsInput`<sup>Optional</sup> <a name="EgressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput"></a>

```csharp
public string[] EgressNetworkConnectorsInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput"></a>

```csharp
public IResolvable|LambdamicrovmsImageTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities"></a>

```csharp
public string[] AdditionalOsCapabilities { get; }
```

- *Type:* string[]

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn"></a>

```csharp
public string BaseImageArn { get; }
```

- *Type:* string

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion"></a>

```csharp
public string BaseImageVersion { get; }
```

- *Type:* string

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn"></a>

```csharp
public string BuildRoleArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsImageCodeArtifact <a name="LambdamicrovmsImageCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageCodeArtifact {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}.

---

### LambdamicrovmsImageConfig <a name="LambdamicrovmsImageConfig" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BaseImageArn,
    string BuildRoleArn,
    string Name,
    string[] AdditionalOsCapabilities = null,
    string BaseImageVersion = null,
    IResolvable|LambdamicrovmsImageCodeArtifact[] CodeArtifact = null,
    IResolvable|LambdamicrovmsImageCpuConfiguration[] CpuConfiguration = null,
    string Description = null,
    string[] EgressNetworkConnectors = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LambdamicrovmsImageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn">BaseImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn">BuildRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion">BaseImageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact">CodeArtifact</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]</code> | code_artifact block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration">CpuConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]</code> | cpu_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn"></a>

```csharp
public string BaseImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}.

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn"></a>

```csharp
public string BuildRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}.

---

##### `AdditionalOsCapabilities`<sup>Optional</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities"></a>

```csharp
public string[] AdditionalOsCapabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}.

---

##### `BaseImageVersion`<sup>Optional</sup> <a name="BaseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion"></a>

```csharp
public string BaseImageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}.

---

##### `CodeArtifact`<sup>Optional</sup> <a name="CodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact"></a>

```csharp
public IResolvable|LambdamicrovmsImageCodeArtifact[] CodeArtifact { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

code_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#code_artifact LambdamicrovmsImage#code_artifact}

---

##### `CpuConfiguration`<sup>Optional</sup> <a name="CpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration"></a>

```csharp
public IResolvable|LambdamicrovmsImageCpuConfiguration[] CpuConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

cpu_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#cpu_configuration LambdamicrovmsImage#cpu_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}.

---

##### `EgressNetworkConnectors`<sup>Optional</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#region LambdamicrovmsImage#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts"></a>

```csharp
public LambdamicrovmsImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#timeouts LambdamicrovmsImage#timeouts}

---

### LambdamicrovmsImageCpuConfiguration <a name="LambdamicrovmsImageCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageCpuConfiguration {
    string Architecture
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture">Architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}. |

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}.

---

### LambdamicrovmsImageTimeouts <a name="LambdamicrovmsImageTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#create LambdamicrovmsImage#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#delete LambdamicrovmsImage#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambdamicrovms_image#update LambdamicrovmsImage#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsImageCodeArtifactList <a name="LambdamicrovmsImageCodeArtifactList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageCodeArtifactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get"></a>

```csharp
private LambdamicrovmsImageCodeArtifactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsImageCodeArtifact[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

---


### LambdamicrovmsImageCodeArtifactOutputReference <a name="LambdamicrovmsImageCodeArtifactOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageCodeArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsImageCodeArtifact InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>

---


### LambdamicrovmsImageCpuConfigurationList <a name="LambdamicrovmsImageCpuConfigurationList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageCpuConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get"></a>

```csharp
private LambdamicrovmsImageCpuConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsImageCpuConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

---


### LambdamicrovmsImageCpuConfigurationOutputReference <a name="LambdamicrovmsImageCpuConfigurationOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageCpuConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsImageCpuConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>

---


### LambdamicrovmsImageTimeoutsOutputReference <a name="LambdamicrovmsImageTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsImageTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---



