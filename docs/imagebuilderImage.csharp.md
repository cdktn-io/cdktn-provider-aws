# `imagebuilderImage` Submodule <a name="`imagebuilderImage` Submodule" id="@cdktn/provider-aws.imagebuilderImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImage <a name="ImagebuilderImage" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image aws_imagebuilder_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImage(Construct Scope, string Id, ImagebuilderImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration">PutImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration">PutImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putWorkflow">PutWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn">ResetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn">ResetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled">ResetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn">ResetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageScanningConfiguration">ResetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration">ResetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImageScanningConfiguration` <a name="PutImageScanningConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration"></a>

```csharp
private void PutImageScanningConfiguration(ImagebuilderImageImageScanningConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---

##### `PutImageTestsConfiguration` <a name="PutImageTestsConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration"></a>

```csharp
private void PutImageTestsConfiguration(ImagebuilderImageImageTestsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putLoggingConfiguration"></a>

```csharp
private void PutLoggingConfiguration(ImagebuilderImageLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts"></a>

```csharp
private void PutTimeouts(ImagebuilderImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---

##### `PutWorkflow` <a name="PutWorkflow" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putWorkflow"></a>

```csharp
private void PutWorkflow(IResolvable|ImagebuilderImageWorkflow[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.putWorkflow.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

---

##### `ResetContainerRecipeArn` <a name="ResetContainerRecipeArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn"></a>

```csharp
private void ResetContainerRecipeArn()
```

##### `ResetDistributionConfigurationArn` <a name="ResetDistributionConfigurationArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn"></a>

```csharp
private void ResetDistributionConfigurationArn()
```

##### `ResetEnhancedImageMetadataEnabled` <a name="ResetEnhancedImageMetadataEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled"></a>

```csharp
private void ResetEnhancedImageMetadataEnabled()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetExecutionRole"></a>

```csharp
private void ResetExecutionRole()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageRecipeArn` <a name="ResetImageRecipeArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn"></a>

```csharp
private void ResetImageRecipeArn()
```

##### `ResetImageScanningConfiguration` <a name="ResetImageScanningConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageScanningConfiguration"></a>

```csharp
private void ResetImageScanningConfiguration()
```

##### `ResetImageTestsConfiguration` <a name="ResetImageTestsConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration"></a>

```csharp
private void ResetImageTestsConfiguration()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetLoggingConfiguration"></a>

```csharp
private void ResetLoggingConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ImagebuilderImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ImagebuilderImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ImagebuilderImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ImagebuilderImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderImage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated">DateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference">ImagebuilderImageLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources">OutputResources</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflow">Workflow</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList">ImagebuilderImageWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput">ContainerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput">DistributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput">EnhancedImageMetadataEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput">ImageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfigurationInput">ImageScanningConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput">ImageTestsConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput">InfrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflowInput">WorkflowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.dateCreated"></a>

```csharp
public string DateCreated { get; }
```

- *Type:* string

---

##### `ImageScanningConfiguration`<sup>Required</sup> <a name="ImageScanningConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfiguration"></a>

```csharp
public ImagebuilderImageImageScanningConfigurationOutputReference ImageScanningConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationOutputReference</a>

---

##### `ImageTestsConfiguration`<sup>Required</sup> <a name="ImageTestsConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImageImageTestsConfigurationOutputReference ImageTestsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a>

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.loggingConfiguration"></a>

```csharp
public ImagebuilderImageLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference">ImagebuilderImageLoggingConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `OutputResources`<sup>Required</sup> <a name="OutputResources" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.outputResources"></a>

```csharp
public ImagebuilderImageOutputResourcesList OutputResources { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList">ImagebuilderImageOutputResourcesList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeouts"></a>

```csharp
public ImagebuilderImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference">ImagebuilderImageTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflow"></a>

```csharp
public ImagebuilderImageWorkflowList Workflow { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList">ImagebuilderImageWorkflowList</a>

---

##### `ContainerRecipeArnInput`<sup>Optional</sup> <a name="ContainerRecipeArnInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput"></a>

```csharp
public string ContainerRecipeArnInput { get; }
```

- *Type:* string

---

##### `DistributionConfigurationArnInput`<sup>Optional</sup> <a name="DistributionConfigurationArnInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput"></a>

```csharp
public string DistributionConfigurationArnInput { get; }
```

- *Type:* string

---

##### `EnhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabledInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput"></a>

```csharp
public bool|IResolvable EnhancedImageMetadataEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageRecipeArnInput`<sup>Optional</sup> <a name="ImageRecipeArnInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput"></a>

```csharp
public string ImageRecipeArnInput { get; }
```

- *Type:* string

---

##### `ImageScanningConfigurationInput`<sup>Optional</sup> <a name="ImageScanningConfigurationInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageScanningConfigurationInput"></a>

```csharp
public ImagebuilderImageImageScanningConfiguration ImageScanningConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---

##### `ImageTestsConfigurationInput`<sup>Optional</sup> <a name="ImageTestsConfigurationInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput"></a>

```csharp
public ImagebuilderImageImageTestsConfiguration ImageTestsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `InfrastructureConfigurationArnInput`<sup>Optional</sup> <a name="InfrastructureConfigurationArnInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput"></a>

```csharp
public string InfrastructureConfigurationArnInput { get; }
```

- *Type:* string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.loggingConfigurationInput"></a>

```csharp
public ImagebuilderImageLoggingConfiguration LoggingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.timeoutsInput"></a>

```csharp
public IResolvable|ImagebuilderImageTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.workflowInput"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflow[] WorkflowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

---

##### `ContainerRecipeArn`<sup>Required</sup> <a name="ContainerRecipeArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; }
```

- *Type:* string

---

##### `DistributionConfigurationArn`<sup>Required</sup> <a name="DistributionConfigurationArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; }
```

- *Type:* string

---

##### `EnhancedImageMetadataEnabled`<sup>Required</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled"></a>

```csharp
public bool|IResolvable EnhancedImageMetadataEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageRecipeArn`<sup>Required</sup> <a name="ImageRecipeArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; }
```

- *Type:* string

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn"></a>

```csharp
public string InfrastructureConfigurationArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageConfig <a name="ImagebuilderImageConfig" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InfrastructureConfigurationArn,
    string ContainerRecipeArn = null,
    string DistributionConfigurationArn = null,
    bool|IResolvable EnhancedImageMetadataEnabled = null,
    string ExecutionRole = null,
    string Id = null,
    string ImageRecipeArn = null,
    ImagebuilderImageImageScanningConfiguration ImageScanningConfiguration = null,
    ImagebuilderImageImageTestsConfiguration ImageTestsConfiguration = null,
    ImagebuilderImageLoggingConfiguration LoggingConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ImagebuilderImageTimeouts Timeouts = null,
    IResolvable|ImagebuilderImageWorkflow[] Workflow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn">InfrastructureConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn">ContainerRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn">DistributionConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled">EnhancedImageMetadataEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#id ImagebuilderImage#id}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn">ImageRecipeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration">ImageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | image_tests_configuration block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.workflow">Workflow</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]</code> | workflow block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InfrastructureConfigurationArn`<sup>Required</sup> <a name="InfrastructureConfigurationArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn"></a>

```csharp
public string InfrastructureConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}.

---

##### `ContainerRecipeArn`<sup>Optional</sup> <a name="ContainerRecipeArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn"></a>

```csharp
public string ContainerRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}.

---

##### `DistributionConfigurationArn`<sup>Optional</sup> <a name="DistributionConfigurationArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn"></a>

```csharp
public string DistributionConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}.

---

##### `EnhancedImageMetadataEnabled`<sup>Optional</sup> <a name="EnhancedImageMetadataEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled"></a>

```csharp
public bool|IResolvable EnhancedImageMetadataEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}.

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#id ImagebuilderImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageRecipeArn`<sup>Optional</sup> <a name="ImageRecipeArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn"></a>

```csharp
public string ImageRecipeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}.

---

##### `ImageScanningConfiguration`<sup>Optional</sup> <a name="ImageScanningConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageScanningConfiguration"></a>

```csharp
public ImagebuilderImageImageScanningConfiguration ImageScanningConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_scanning_configuration ImagebuilderImage#image_scanning_configuration}

---

##### `ImageTestsConfiguration`<sup>Optional</sup> <a name="ImageTestsConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration"></a>

```csharp
public ImagebuilderImageImageTestsConfiguration ImageTestsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

image_tests_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.loggingConfiguration"></a>

```csharp
public ImagebuilderImageLoggingConfiguration LoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#logging_configuration ImagebuilderImage#logging_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#region ImagebuilderImage#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.timeouts"></a>

```csharp
public ImagebuilderImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#timeouts ImagebuilderImage#timeouts}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageConfig.property.workflow"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflow[] Workflow { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#workflow ImagebuilderImage#workflow}

---

### ImagebuilderImageImageScanningConfiguration <a name="ImagebuilderImageImageScanningConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageImageScanningConfiguration {
    ImagebuilderImageImageScanningConfigurationEcrConfiguration EcrConfiguration = null,
    bool|IResolvable ImageScanningEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.ecrConfiguration">EcrConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | ecr_configuration block. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.imageScanningEnabled">ImageScanningEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}. |

---

##### `EcrConfiguration`<sup>Optional</sup> <a name="EcrConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.ecrConfiguration"></a>

```csharp
public ImagebuilderImageImageScanningConfigurationEcrConfiguration EcrConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

ecr_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#ecr_configuration ImagebuilderImage#ecr_configuration}

---

##### `ImageScanningEnabled`<sup>Optional</sup> <a name="ImageScanningEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.imageScanningEnabled"></a>

```csharp
public bool|IResolvable ImageScanningEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}.

---

### ImagebuilderImageImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImageImageScanningConfigurationEcrConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageImageScanningConfigurationEcrConfiguration {
    string[] ContainerTags = null,
    string RepositoryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}. |

---

##### `ContainerTags`<sup>Optional</sup> <a name="ContainerTags" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}.

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}.

---

### ImagebuilderImageImageTestsConfiguration <a name="ImagebuilderImageImageTestsConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageImageTestsConfiguration {
    bool|IResolvable ImageTestsEnabled = null,
    double TimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}. |

---

##### `ImageTestsEnabled`<sup>Optional</sup> <a name="ImageTestsEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled"></a>

```csharp
public bool|IResolvable ImageTestsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}.

---

##### `TimeoutMinutes`<sup>Optional</sup> <a name="TimeoutMinutes" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}.

---

### ImagebuilderImageLoggingConfiguration <a name="ImagebuilderImageLoggingConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageLoggingConfiguration {
    string LogGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#log_group_name ImagebuilderImage#log_group_name}. |

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#log_group_name ImagebuilderImage#log_group_name}.

---

### ImagebuilderImageOutputResources <a name="ImagebuilderImageOutputResources" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResources {

};
```


### ImagebuilderImageOutputResourcesAmis <a name="ImagebuilderImageOutputResourcesAmis" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesAmis {

};
```


### ImagebuilderImageOutputResourcesContainers <a name="ImagebuilderImageOutputResourcesContainers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesContainers {

};
```


### ImagebuilderImageTimeouts <a name="ImagebuilderImageTimeouts" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#create ImagebuilderImage#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#create ImagebuilderImage#create}.

---

### ImagebuilderImageWorkflow <a name="ImagebuilderImageWorkflow" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageWorkflow {
    string WorkflowArn,
    string OnFailure = null,
    string ParallelGroup = null,
    IResolvable|ImagebuilderImageWorkflowParameter[] Parameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.onFailure">OnFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parallelGroup">ParallelGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parameter">Parameter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]</code> | parameter block. |

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}.

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.onFailure"></a>

```csharp
public string OnFailure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}.

---

##### `ParallelGroup`<sup>Optional</sup> <a name="ParallelGroup" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parallelGroup"></a>

```csharp
public string ParallelGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow.property.parameter"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflowParameter[] Parameter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#parameter ImagebuilderImage#parameter}

---

### ImagebuilderImageWorkflowParameter <a name="ImagebuilderImageWorkflowParameter" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageWorkflowParameter {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">ResetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerTags` <a name="ResetContainerTags" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```csharp
private void ResetContainerTags()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```csharp
private void ResetRepositoryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">ContainerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">ContainerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerTagsInput`<sup>Optional</sup> <a name="ContainerTagsInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```csharp
public string[] ContainerTagsInput { get; }
```

- *Type:* string[]

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```csharp
public string[] ContainerTags { get; }
```

- *Type:* string[]

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageImageScanningConfigurationEcrConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---


### ImagebuilderImageImageScanningConfigurationOutputReference <a name="ImagebuilderImageImageScanningConfigurationOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageImageScanningConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration">PutEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetEcrConfiguration">ResetEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetImageScanningEnabled">ResetImageScanningEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrConfiguration` <a name="PutEcrConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```csharp
private void PutEcrConfiguration(ImagebuilderImageImageScanningConfigurationEcrConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---

##### `ResetEcrConfiguration` <a name="ResetEcrConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```csharp
private void ResetEcrConfiguration()
```

##### `ResetImageScanningEnabled` <a name="ResetImageScanningEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```csharp
private void ResetImageScanningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfiguration">EcrConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfigurationInput">EcrConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">ImageScanningEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabled">ImageScanningEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EcrConfiguration`<sup>Required</sup> <a name="EcrConfiguration" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```csharp
public ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference EcrConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `EcrConfigurationInput`<sup>Optional</sup> <a name="EcrConfigurationInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```csharp
public ImagebuilderImageImageScanningConfigurationEcrConfiguration EcrConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---

##### `ImageScanningEnabledInput`<sup>Optional</sup> <a name="ImageScanningEnabledInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```csharp
public bool|IResolvable ImageScanningEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImageScanningEnabled`<sup>Required</sup> <a name="ImageScanningEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```csharp
public bool|IResolvable ImageScanningEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageImageScanningConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---


### ImagebuilderImageImageTestsConfigurationOutputReference <a name="ImagebuilderImageImageTestsConfigurationOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageImageTestsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled">ResetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes">ResetTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTestsEnabled` <a name="ResetImageTestsEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```csharp
private void ResetImageTestsEnabled()
```

##### `ResetTimeoutMinutes` <a name="ResetTimeoutMinutes" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```csharp
private void ResetTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">ImageTestsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput">TimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled">ImageTestsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes">TimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageTestsEnabledInput`<sup>Optional</sup> <a name="ImageTestsEnabledInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```csharp
public bool|IResolvable ImageTestsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutMinutesInput`<sup>Optional</sup> <a name="TimeoutMinutesInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```csharp
public double TimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `ImageTestsEnabled`<sup>Required</sup> <a name="ImageTestsEnabled" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```csharp
public bool|IResolvable ImageTestsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutMinutes`<sup>Required</sup> <a name="TimeoutMinutes" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```csharp
public double TimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageImageTestsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---


### ImagebuilderImageLoggingConfigurationOutputReference <a name="ImagebuilderImageLoggingConfigurationOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageLoggingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

---


### ImagebuilderImageOutputResourcesAmisList <a name="ImagebuilderImageOutputResourcesAmisList" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesAmisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get"></a>

```csharp
private ImagebuilderImageOutputResourcesAmisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesAmisOutputReference <a name="ImagebuilderImageOutputResourcesAmisOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesAmisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageOutputResourcesAmis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmis">ImagebuilderImageOutputResourcesAmis</a>

---


### ImagebuilderImageOutputResourcesContainersList <a name="ImagebuilderImageOutputResourcesContainersList" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.get"></a>

```csharp
private ImagebuilderImageOutputResourcesContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesContainersOutputReference <a name="ImagebuilderImageOutputResourcesContainersOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.imageUris">ImageUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers">ImagebuilderImageOutputResourcesContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageUris`<sup>Required</sup> <a name="ImageUris" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.imageUris"></a>

```csharp
public string[] ImageUris { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageOutputResourcesContainers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainers">ImagebuilderImageOutputResourcesContainers</a>

---


### ImagebuilderImageOutputResourcesList <a name="ImagebuilderImageOutputResourcesList" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get"></a>

```csharp
private ImagebuilderImageOutputResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ImagebuilderImageOutputResourcesOutputReference <a name="ImagebuilderImageOutputResourcesOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageOutputResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis">Amis</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList">ImagebuilderImageOutputResourcesContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.amis"></a>

```csharp
public ImagebuilderImageOutputResourcesAmisList Amis { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesAmisList">ImagebuilderImageOutputResourcesAmisList</a>

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.containers"></a>

```csharp
public ImagebuilderImageOutputResourcesContainersList Containers { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesContainersList">ImagebuilderImageOutputResourcesContainersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResourcesOutputReference.property.internalValue"></a>

```csharp
public ImagebuilderImageOutputResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageOutputResources">ImagebuilderImageOutputResources</a>

---


### ImagebuilderImageTimeoutsOutputReference <a name="ImagebuilderImageTimeoutsOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageTimeouts">ImagebuilderImageTimeouts</a>

---


### ImagebuilderImageWorkflowList <a name="ImagebuilderImageWorkflowList" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.get"></a>

```csharp
private ImagebuilderImageWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflow[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>[]

---


### ImagebuilderImageWorkflowOutputReference <a name="ImagebuilderImageWorkflowOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParallelGroup">ResetParallelGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.putParameter"></a>

```csharp
private void PutParameter(IResolvable|ImagebuilderImageWorkflowParameter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.putParameter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetParallelGroup` <a name="ResetParallelGroup" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParallelGroup"></a>

```csharp
private void ResetParallelGroup()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList">ImagebuilderImageWorkflowParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroupInput">ParallelGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameterInput">ParameterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArnInput">WorkflowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailure">OnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroup">ParallelGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameter"></a>

```csharp
public ImagebuilderImageWorkflowParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList">ImagebuilderImageWorkflowParameterList</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailureInput"></a>

```csharp
public string OnFailureInput { get; }
```

- *Type:* string

---

##### `ParallelGroupInput`<sup>Optional</sup> <a name="ParallelGroupInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroupInput"></a>

```csharp
public string ParallelGroupInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parameterInput"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflowParameter[] ParameterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

---

##### `WorkflowArnInput`<sup>Optional</sup> <a name="WorkflowArnInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArnInput"></a>

```csharp
public string WorkflowArnInput { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.onFailure"></a>

```csharp
public string OnFailure { get; }
```

- *Type:* string

---

##### `ParallelGroup`<sup>Required</sup> <a name="ParallelGroup" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.parallelGroup"></a>

```csharp
public string ParallelGroup { get; }
```

- *Type:* string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflow">ImagebuilderImageWorkflow</a>

---


### ImagebuilderImageWorkflowParameterList <a name="ImagebuilderImageWorkflowParameterList" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageWorkflowParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.get"></a>

```csharp
private ImagebuilderImageWorkflowParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflowParameter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>[]

---


### ImagebuilderImageWorkflowParameterOutputReference <a name="ImagebuilderImageWorkflowParameterOutputReference" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ImagebuilderImageWorkflowParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderImageWorkflowParameter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.imagebuilderImage.ImagebuilderImageWorkflowParameter">ImagebuilderImageWorkflowParameter</a>

---



