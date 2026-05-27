# `appstreamStack` Submodule <a name="`appstreamStack` Submodule" id="@cdktn/provider-aws.appstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStack <a name="AppstreamStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack aws_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStack(Construct Scope, string Id, AppstreamStackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.putAccessEndpoints">PutAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.putStorageConnectors">PutStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.putStreamingExperienceSettings">PutStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.putUserSettings">PutUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetAccessEndpoints">ResetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetEmbedHostDomains">ResetEmbedHostDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetFeedbackUrl">ResetFeedbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetStorageConnectors">ResetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetStreamingExperienceSettings">ResetStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.resetUserSettings">ResetUserSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessEndpoints` <a name="PutAccessEndpoints" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putAccessEndpoints"></a>

```csharp
private void PutAccessEndpoints(IResolvable|AppstreamStackAccessEndpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putAccessEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putApplicationSettings"></a>

```csharp
private void PutApplicationSettings(AppstreamStackApplicationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `PutStorageConnectors` <a name="PutStorageConnectors" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putStorageConnectors"></a>

```csharp
private void PutStorageConnectors(IResolvable|AppstreamStackStorageConnectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putStorageConnectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `PutStreamingExperienceSettings` <a name="PutStreamingExperienceSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putStreamingExperienceSettings"></a>

```csharp
private void PutStreamingExperienceSettings(AppstreamStackStreamingExperienceSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putStreamingExperienceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `PutUserSettings` <a name="PutUserSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putUserSettings"></a>

```csharp
private void PutUserSettings(IResolvable|AppstreamStackUserSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.putUserSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `ResetAccessEndpoints` <a name="ResetAccessEndpoints" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetAccessEndpoints"></a>

```csharp
private void ResetAccessEndpoints()
```

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetApplicationSettings"></a>

```csharp
private void ResetApplicationSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmbedHostDomains` <a name="ResetEmbedHostDomains" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetEmbedHostDomains"></a>

```csharp
private void ResetEmbedHostDomains()
```

##### `ResetFeedbackUrl` <a name="ResetFeedbackUrl" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetFeedbackUrl"></a>

```csharp
private void ResetFeedbackUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStorageConnectors` <a name="ResetStorageConnectors" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetStorageConnectors"></a>

```csharp
private void ResetStorageConnectors()
```

##### `ResetStreamingExperienceSettings` <a name="ResetStreamingExperienceSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetStreamingExperienceSettings"></a>

```csharp
private void ResetStreamingExperienceSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUserSettings` <a name="ResetUserSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.resetUserSettings"></a>

```csharp
private void ResetUserSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamStack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamStack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamStack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamStack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamStack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.storageConnectors">StorageConnectors</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.streamingExperienceSettings">StreamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.accessEndpointsInput">AccessEndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomainsInput">EmbedHostDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrlInput">FeedbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.storageConnectorsInput">StorageConnectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput">StreamingExperienceSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.userSettingsInput">UserSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomains">EmbedHostDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrl">FeedbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.accessEndpoints"></a>

```csharp
public AppstreamStackAccessEndpointsList AccessEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a>

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.applicationSettings"></a>

```csharp
public AppstreamStackApplicationSettingsOutputReference ApplicationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `StorageConnectors`<sup>Required</sup> <a name="StorageConnectors" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.storageConnectors"></a>

```csharp
public AppstreamStackStorageConnectorsList StorageConnectors { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a>

---

##### `StreamingExperienceSettings`<sup>Required</sup> <a name="StreamingExperienceSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.streamingExperienceSettings"></a>

```csharp
public AppstreamStackStreamingExperienceSettingsOutputReference StreamingExperienceSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.userSettings"></a>

```csharp
public AppstreamStackUserSettingsList UserSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a>

---

##### `AccessEndpointsInput`<sup>Optional</sup> <a name="AccessEndpointsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.accessEndpointsInput"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints[] AccessEndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.applicationSettingsInput"></a>

```csharp
public AppstreamStackApplicationSettings ApplicationSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmbedHostDomainsInput`<sup>Optional</sup> <a name="EmbedHostDomainsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomainsInput"></a>

```csharp
public string[] EmbedHostDomainsInput { get; }
```

- *Type:* string[]

---

##### `FeedbackUrlInput`<sup>Optional</sup> <a name="FeedbackUrlInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrlInput"></a>

```csharp
public string FeedbackUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageConnectorsInput`<sup>Optional</sup> <a name="StorageConnectorsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.storageConnectorsInput"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors[] StorageConnectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `StreamingExperienceSettingsInput`<sup>Optional</sup> <a name="StreamingExperienceSettingsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput"></a>

```csharp
public AppstreamStackStreamingExperienceSettings StreamingExperienceSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserSettingsInput`<sup>Optional</sup> <a name="UserSettingsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.userSettingsInput"></a>

```csharp
public IResolvable|AppstreamStackUserSettings[] UserSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmbedHostDomains`<sup>Required</sup> <a name="EmbedHostDomains" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomains"></a>

```csharp
public string[] EmbedHostDomains { get; }
```

- *Type:* string[]

---

##### `FeedbackUrl`<sup>Required</sup> <a name="FeedbackUrl" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrl"></a>

```csharp
public string FeedbackUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appstreamStack.AppstreamStack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackAccessEndpoints <a name="AppstreamStackAccessEndpoints" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackAccessEndpoints {
    string EndpointType,
    string VpceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId">VpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}. |

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}.

---

##### `VpceId`<sup>Optional</sup> <a name="VpceId" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId"></a>

```csharp
public string VpceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}.

---

### AppstreamStackApplicationSettings <a name="AppstreamStackApplicationSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackApplicationSettings {
    bool|IResolvable Enabled,
    string SettingsGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}.

---

##### `SettingsGroup`<sup>Optional</sup> <a name="SettingsGroup" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}.

---

### AppstreamStackConfig <a name="AppstreamStackConfig" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|AppstreamStackAccessEndpoints[] AccessEndpoints = null,
    AppstreamStackApplicationSettings ApplicationSettings = null,
    string Description = null,
    string DisplayName = null,
    string[] EmbedHostDomains = null,
    string FeedbackUrl = null,
    string Id = null,
    string RedirectUrl = null,
    string Region = null,
    IResolvable|AppstreamStackStorageConnectors[] StorageConnectors = null,
    AppstreamStackStreamingExperienceSettings StreamingExperienceSettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IResolvable|AppstreamStackUserSettings[] UserSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#name AppstreamStack#name}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.accessEndpoints">AccessEndpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | access_endpoints block. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#description AppstreamStack#description}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.embedHostDomains">EmbedHostDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.feedbackUrl">FeedbackUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#id AppstreamStack#id}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.storageConnectors">StorageConnectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | storage_connectors block. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings">StreamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | streaming_experience_settings block. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#tags AppstreamStack#tags}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#tags_all AppstreamStack#tags_all}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.userSettings">UserSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | user_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#name AppstreamStack#name}.

---

##### `AccessEndpoints`<sup>Optional</sup> <a name="AccessEndpoints" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.accessEndpoints"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints[] AccessEndpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

access_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.applicationSettings"></a>

```csharp
public AppstreamStackApplicationSettings ApplicationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#description AppstreamStack#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}.

---

##### `EmbedHostDomains`<sup>Optional</sup> <a name="EmbedHostDomains" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.embedHostDomains"></a>

```csharp
public string[] EmbedHostDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}.

---

##### `FeedbackUrl`<sup>Optional</sup> <a name="FeedbackUrl" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.feedbackUrl"></a>

```csharp
public string FeedbackUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#id AppstreamStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#region AppstreamStack#region}

---

##### `StorageConnectors`<sup>Optional</sup> <a name="StorageConnectors" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.storageConnectors"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors[] StorageConnectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

storage_connectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `StreamingExperienceSettings`<sup>Optional</sup> <a name="StreamingExperienceSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings"></a>

```csharp
public AppstreamStackStreamingExperienceSettings StreamingExperienceSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

streaming_experience_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#tags AppstreamStack#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#tags_all AppstreamStack#tags_all}.

---

##### `UserSettings`<sup>Optional</sup> <a name="UserSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStackConfig.property.userSettings"></a>

```csharp
public IResolvable|AppstreamStackUserSettings[] UserSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

user_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

### AppstreamStackStorageConnectors <a name="AppstreamStackStorageConnectors" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackStorageConnectors {
    string ConnectorType,
    string[] Domains = null,
    string ResourceIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.connectorType">ConnectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.domains">Domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#domains AppstreamStack#domains}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}. |

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.connectorType"></a>

```csharp
public string ConnectorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}.

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#domains AppstreamStack#domains}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}.

---

### AppstreamStackStreamingExperienceSettings <a name="AppstreamStackStreamingExperienceSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackStreamingExperienceSettings {
    string PreferredProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}. |

---

##### `PreferredProtocol`<sup>Optional</sup> <a name="PreferredProtocol" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}.

---

### AppstreamStackUserSettings <a name="AppstreamStackUserSettings" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackUserSettings {
    string Action,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#action AppstreamStack#action}. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#permission AppstreamStack#permission}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#action AppstreamStack#action}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/appstream_stack#permission AppstreamStack#permission}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamStackAccessEndpointsList <a name="AppstreamStackAccessEndpointsList" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackAccessEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.get"></a>

```csharp
private AppstreamStackAccessEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---


### AppstreamStackAccessEndpointsOutputReference <a name="AppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackAccessEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId">ResetVpceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpceId` <a name="ResetVpceId" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId"></a>

```csharp
private void ResetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput">VpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId">VpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpceIdInput`<sup>Optional</sup> <a name="VpceIdInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput"></a>

```csharp
public string VpceIdInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```csharp
public string VpceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>

---


### AppstreamStackApplicationSettingsOutputReference <a name="AppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackApplicationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup">ResetSettingsGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSettingsGroup` <a name="ResetSettingsGroup" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup"></a>

```csharp
private void ResetSettingsGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput">SettingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsGroupInput`<sup>Optional</sup> <a name="SettingsGroupInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```csharp
public string SettingsGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsGroup`<sup>Required</sup> <a name="SettingsGroup" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```csharp
public AppstreamStackApplicationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---


### AppstreamStackStorageConnectorsList <a name="AppstreamStackStorageConnectorsList" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackStorageConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.get"></a>

```csharp
private AppstreamStackStorageConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---


### AppstreamStackStorageConnectorsOutputReference <a name="AppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackStorageConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```csharp
public string ConnectorTypeInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>

---


### AppstreamStackStreamingExperienceSettingsOutputReference <a name="AppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackStreamingExperienceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol">ResetPreferredProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredProtocol` <a name="ResetPreferredProtocol" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol"></a>

```csharp
private void ResetPreferredProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput">PreferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredProtocolInput`<sup>Optional</sup> <a name="PreferredProtocolInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput"></a>

```csharp
public string PreferredProtocolInput { get; }
```

- *Type:* string

---

##### `PreferredProtocol`<sup>Required</sup> <a name="PreferredProtocol" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```csharp
public AppstreamStackStreamingExperienceSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---


### AppstreamStackUserSettingsList <a name="AppstreamStackUserSettingsList" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackUserSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.get"></a>

```csharp
private AppstreamStackUserSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackUserSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---


### AppstreamStackUserSettingsOutputReference <a name="AppstreamStackUserSettingsOutputReference" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamStackUserSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackUserSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>

---



