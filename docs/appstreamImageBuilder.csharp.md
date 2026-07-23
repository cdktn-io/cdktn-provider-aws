# `appstreamImageBuilder` Submodule <a name="`appstreamImageBuilder` Submodule" id="@cdktn/provider-aws.appstreamImageBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamImageBuilder <a name="AppstreamImageBuilder" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder aws_appstream_image_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilder(Construct Scope, string Id, AppstreamImageBuilderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint">PutAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo">PutDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoint">ResetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion">ResetAppstreamAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo">ResetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess">ResetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn">ResetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessEndpoint` <a name="PutAccessEndpoint" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint"></a>

```csharp
private void PutAccessEndpoint(IResolvable|AppstreamImageBuilderAccessEndpoint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]

---

##### `PutDomainJoinInfo` <a name="PutDomainJoinInfo" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo"></a>

```csharp
private void PutDomainJoinInfo(AppstreamImageBuilderDomainJoinInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig"></a>

```csharp
private void PutVpcConfig(AppstreamImageBuilderVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `ResetAccessEndpoint` <a name="ResetAccessEndpoint" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoint"></a>

```csharp
private void ResetAccessEndpoint()
```

##### `ResetAppstreamAgentVersion` <a name="ResetAppstreamAgentVersion" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion"></a>

```csharp
private void ResetAppstreamAgentVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomainJoinInfo` <a name="ResetDomainJoinInfo" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo"></a>

```csharp
private void ResetDomainJoinInfo()
```

##### `ResetEnableDefaultInternetAccess` <a name="ResetEnableDefaultInternetAccess" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess"></a>

```csharp
private void ResetEnableDefaultInternetAccess()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageArn` <a name="ResetImageArn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn"></a>

```csharp
private void ResetImageArn()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetImageName"></a>

```csharp
private void ResetImageName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamImageBuilder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamImageBuilder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamImageBuilder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppstreamImageBuilder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamImageBuilder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamImageBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamImageBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoint">AccessEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList">AppstreamImageBuilderAccessEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointInput">AccessEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput">AppstreamAgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput">DomainJoinInfoInput</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput">EnableDefaultInternetAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput">ImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessEndpoint`<sup>Required</sup> <a name="AccessEndpoint" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoint"></a>

```csharp
public AppstreamImageBuilderAccessEndpointList AccessEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList">AppstreamImageBuilderAccessEndpointList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DomainJoinInfo`<sup>Required</sup> <a name="DomainJoinInfo" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfoOutputReference DomainJoinInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig"></a>

```csharp
public AppstreamImageBuilderVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a>

---

##### `AccessEndpointInput`<sup>Optional</sup> <a name="AccessEndpointInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointInput"></a>

```csharp
public IResolvable|AppstreamImageBuilderAccessEndpoint[] AccessEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]

---

##### `AppstreamAgentVersionInput`<sup>Optional</sup> <a name="AppstreamAgentVersionInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput"></a>

```csharp
public string AppstreamAgentVersionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainJoinInfoInput`<sup>Optional</sup> <a name="DomainJoinInfoInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfo DomainJoinInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `EnableDefaultInternetAccessInput`<sup>Optional</sup> <a name="EnableDefaultInternetAccessInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput"></a>

```csharp
public string ImageArnInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput"></a>

```csharp
public AppstreamImageBuilderVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `AppstreamAgentVersion`<sup>Required</sup> <a name="AppstreamAgentVersion" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion"></a>

```csharp
public string AppstreamAgentVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableDefaultInternetAccess`<sup>Required</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamImageBuilderAccessEndpoint <a name="AppstreamImageBuilderAccessEndpoint" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderAccessEndpoint {
    string EndpointType,
    string VpceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.vpceId">VpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}. |

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}.

---

##### `VpceId`<sup>Optional</sup> <a name="VpceId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint.property.vpceId"></a>

```csharp
public string VpceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}.

---

### AppstreamImageBuilderConfig <a name="AppstreamImageBuilderConfig" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceType,
    string Name,
    IResolvable|AppstreamImageBuilderAccessEndpoint[] AccessEndpoint = null,
    string AppstreamAgentVersion = null,
    string Description = null,
    string DisplayName = null,
    AppstreamImageBuilderDomainJoinInfo DomainJoinInfo = null,
    bool|IResolvable EnableDefaultInternetAccess = null,
    string IamRoleArn = null,
    string Id = null,
    string ImageArn = null,
    string ImageName = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    AppstreamImageBuilderVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoint">AccessEndpoint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]</code> | access_endpoint block. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | domain_join_info block. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#id AppstreamImageBuilder#id}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn">ImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `AccessEndpoint`<sup>Optional</sup> <a name="AccessEndpoint" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoint"></a>

```csharp
public IResolvable|AppstreamImageBuilderAccessEndpoint[] AccessEndpoint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]

access_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#access_endpoint AppstreamImageBuilder#access_endpoint}

---

##### `AppstreamAgentVersion`<sup>Optional</sup> <a name="AppstreamAgentVersion" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion"></a>

```csharp
public string AppstreamAgentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `DomainJoinInfo`<sup>Optional</sup> <a name="DomainJoinInfo" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfo DomainJoinInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

domain_join_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}

---

##### `EnableDefaultInternetAccess`<sup>Optional</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#id AppstreamImageBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageArn`<sup>Optional</sup> <a name="ImageArn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn"></a>

```csharp
public string ImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#region AppstreamImageBuilder#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig"></a>

```csharp
public AppstreamImageBuilderVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}

---

### AppstreamImageBuilderDomainJoinInfo <a name="AppstreamImageBuilderDomainJoinInfo" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderDomainJoinInfo {
    string DirectoryName = null,
    string OrganizationalUnitDistinguishedName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName">DirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}. |

---

##### `DirectoryName`<sup>Optional</sup> <a name="DirectoryName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName"></a>

```csharp
public string DirectoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

### AppstreamImageBuilderVpcConfig <a name="AppstreamImageBuilderVpcConfig" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderVpcConfig {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamImageBuilderAccessEndpointList <a name="AppstreamImageBuilderAccessEndpointList" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderAccessEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get"></a>

```csharp
private AppstreamImageBuilderAccessEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamImageBuilderAccessEndpoint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>[]

---


### AppstreamImageBuilderAccessEndpointOutputReference <a name="AppstreamImageBuilderAccessEndpointOutputReference" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderAccessEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resetVpceId">ResetVpceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpceId` <a name="ResetVpceId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.resetVpceId"></a>

```csharp
private void ResetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceIdInput">VpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceId">VpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpceIdInput`<sup>Optional</sup> <a name="VpceIdInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceIdInput"></a>

```csharp
public string VpceIdInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.vpceId"></a>

```csharp
public string VpceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamImageBuilderAccessEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoint">AppstreamImageBuilderAccessEndpoint</a>

---


### AppstreamImageBuilderDomainJoinInfoOutputReference <a name="AppstreamImageBuilderDomainJoinInfoOutputReference" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderDomainJoinInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName">ResetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryName` <a name="ResetDirectoryName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName"></a>

```csharp
private void ResetDirectoryName()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```csharp
private void ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput">DirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```csharp
public string DirectoryNameInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```csharp
public string OrganizationalUnitDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue"></a>

```csharp
public AppstreamImageBuilderDomainJoinInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---


### AppstreamImageBuilderVpcConfigOutputReference <a name="AppstreamImageBuilderVpcConfigOutputReference" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppstreamImageBuilderVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue"></a>

```csharp
public AppstreamImageBuilderVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---



