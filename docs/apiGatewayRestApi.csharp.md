# `apiGatewayRestApi` Submodule <a name="`apiGatewayRestApi` Submodule" id="@cdktn/provider-aws.apiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApi <a name="ApiGatewayRestApi" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayRestApi(Construct Scope, string Id, ApiGatewayRestApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig">ApiGatewayRestApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig">ApiGatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource">ResetApiKeySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes">ResetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint">ResetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointAccessMode">ResetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetFailOnWarnings">ResetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize">ResetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode">ResetPutRestApiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(ApiGatewayRestApiEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiGatewayRestApiTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a>

---

##### `ResetApiKeySource` <a name="ResetApiKeySource" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource"></a>

```csharp
private void ResetApiKeySource()
```

##### `ResetBinaryMediaTypes` <a name="ResetBinaryMediaTypes" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes"></a>

```csharp
private void ResetBinaryMediaTypes()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableExecuteApiEndpoint` <a name="ResetDisableExecuteApiEndpoint" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```csharp
private void ResetDisableExecuteApiEndpoint()
```

##### `ResetEndpointAccessMode` <a name="ResetEndpointAccessMode" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointAccessMode"></a>

```csharp
private void ResetEndpointAccessMode()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetFailOnWarnings` <a name="ResetFailOnWarnings" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetFailOnWarnings"></a>

```csharp
private void ResetFailOnWarnings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimumCompressionSize` <a name="ResetMinimumCompressionSize" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize"></a>

```csharp
private void ResetMinimumCompressionSize()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetPutRestApiMode` <a name="ResetPutRestApiMode" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode"></a>

```csharp
private void ResetPutRestApiMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiGatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayRestApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayRestApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayRestApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayRestApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiGatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayRestApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiGatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn">ExecutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference">ApiGatewayRestApiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput">ApiKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput">BinaryMediaTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput">DisableExecuteApiEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointAccessModeInput">EndpointAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.failOnWarningsInput">FailOnWarningsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput">MinimumCompressionSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput">PutRestApiModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource">ApiKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.failOnWarnings">FailOnWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode">PutRestApiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration"></a>

```csharp
public ApiGatewayRestApiEndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn"></a>

```csharp
public string ExecutionArn { get; }
```

- *Type:* string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId"></a>

```csharp
public string RootResourceId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.timeouts"></a>

```csharp
public ApiGatewayRestApiTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference">ApiGatewayRestApiTimeoutsOutputReference</a>

---

##### `ApiKeySourceInput`<sup>Optional</sup> <a name="ApiKeySourceInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput"></a>

```csharp
public string ApiKeySourceInput { get; }
```

- *Type:* string

---

##### `BinaryMediaTypesInput`<sup>Optional</sup> <a name="BinaryMediaTypesInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput"></a>

```csharp
public string[] BinaryMediaTypesInput { get; }
```

- *Type:* string[]

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpointInput`<sup>Optional</sup> <a name="DisableExecuteApiEndpointInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointAccessModeInput`<sup>Optional</sup> <a name="EndpointAccessModeInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointAccessModeInput"></a>

```csharp
public string EndpointAccessModeInput { get; }
```

- *Type:* string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput"></a>

```csharp
public ApiGatewayRestApiEndpointConfiguration EndpointConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `FailOnWarningsInput`<sup>Optional</sup> <a name="FailOnWarningsInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.failOnWarningsInput"></a>

```csharp
public bool|IResolvable FailOnWarningsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinimumCompressionSizeInput`<sup>Optional</sup> <a name="MinimumCompressionSizeInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput"></a>

```csharp
public string MinimumCompressionSizeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PutRestApiModeInput`<sup>Optional</sup> <a name="PutRestApiModeInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput"></a>

```csharp
public string PutRestApiModeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiGatewayRestApiTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a>

---

##### `ApiKeySource`<sup>Required</sup> <a name="ApiKeySource" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource"></a>

```csharp
public string ApiKeySource { get; }
```

- *Type:* string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes"></a>

```csharp
public string[] BinaryMediaTypes { get; }
```

- *Type:* string[]

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; }
```

- *Type:* string

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.failOnWarnings"></a>

```csharp
public bool|IResolvable FailOnWarnings { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize"></a>

```csharp
public string MinimumCompressionSize { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PutRestApiMode`<sup>Required</sup> <a name="PutRestApiMode" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode"></a>

```csharp
public string PutRestApiMode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiConfig <a name="ApiGatewayRestApiConfig" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayRestApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ApiKeySource = null,
    string[] BinaryMediaTypes = null,
    string Body = null,
    string Description = null,
    bool|IResolvable DisableExecuteApiEndpoint = null,
    string EndpointAccessMode = null,
    ApiGatewayRestApiEndpointConfiguration EndpointConfiguration = null,
    bool|IResolvable FailOnWarnings = null,
    string Id = null,
    string MinimumCompressionSize = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Policy = null,
    string PutRestApiMode = null,
    string Region = null,
    string SecurityPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ApiGatewayRestApiTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource">ApiKeySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body">Body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#endpoint_access_mode ApiGatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.failOnWarnings">FailOnWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#fail_on_warnings ApiGatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode">PutRestApiMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#security_policy ApiGatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `ApiKeySource`<sup>Optional</sup> <a name="ApiKeySource" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource"></a>

```csharp
public string ApiKeySource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `BinaryMediaTypes`<sup>Optional</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes"></a>

```csharp
public string[] BinaryMediaTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `DisableExecuteApiEndpoint`<sup>Optional</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```csharp
public bool|IResolvable DisableExecuteApiEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `EndpointAccessMode`<sup>Optional</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#endpoint_access_mode ApiGatewayRestApi#endpoint_access_mode}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration"></a>

```csharp
public ApiGatewayRestApiEndpointConfiguration EndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `FailOnWarnings`<sup>Optional</sup> <a name="FailOnWarnings" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.failOnWarnings"></a>

```csharp
public bool|IResolvable FailOnWarnings { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#fail_on_warnings ApiGatewayRestApi#fail_on_warnings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumCompressionSize`<sup>Optional</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize"></a>

```csharp
public string MinimumCompressionSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `PutRestApiMode`<sup>Optional</sup> <a name="PutRestApiMode" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode"></a>

```csharp
public string PutRestApiMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#region ApiGatewayRestApi#region}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#security_policy ApiGatewayRestApi#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.timeouts"></a>

```csharp
public ApiGatewayRestApiTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#timeouts ApiGatewayRestApi#timeouts}

---

### ApiGatewayRestApiEndpointConfiguration <a name="ApiGatewayRestApiEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayRestApiEndpointConfiguration {
    string[] Types,
    string IpAddressType = null,
    string[] VpcEndpointIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types">Types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#types ApiGatewayRestApi#types}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#ip_address_type ApiGatewayRestApi#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}. |

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#types ApiGatewayRestApi#types}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#ip_address_type ApiGatewayRestApi#ip_address_type}.

---

##### `VpcEndpointIds`<sup>Optional</sup> <a name="VpcEndpointIds" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```csharp
public string[] VpcEndpointIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.

---

### ApiGatewayRestApiTimeouts <a name="ApiGatewayRestApiTimeouts" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayRestApiTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#create ApiGatewayRestApi#create}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#delete ApiGatewayRestApi#delete}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#update ApiGatewayRestApi#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#create ApiGatewayRestApi#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#delete ApiGatewayRestApi#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/api_gateway_rest_api#update ApiGatewayRestApi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiEndpointConfigurationOutputReference <a name="ApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayRestApiEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">ResetVpcEndpointIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetVpcEndpointIds` <a name="ResetVpcEndpointIds" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```csharp
private void ResetVpcEndpointIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">VpcEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIdsInput`<sup>Optional</sup> <a name="VpcEndpointIdsInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```csharp
public string[] VpcEndpointIdsInput { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```csharp
public string[] VpcEndpointIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayRestApiEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---


### ApiGatewayRestApiTimeoutsOutputReference <a name="ApiGatewayRestApiTimeoutsOutputReference" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayRestApiTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiGatewayRestApiTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apiGatewayRestApi.ApiGatewayRestApiTimeouts">ApiGatewayRestApiTimeouts</a>

---



