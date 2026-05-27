# `apiGatewayDomainName` Submodule <a name="`apiGatewayDomainName` Submodule" id="@cdktn/provider-aws.apiGatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainName <a name="ApiGatewayDomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name aws_api_gateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainName(Construct Scope, string Id, ApiGatewayDomainNameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig">ApiGatewayDomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication">PutMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody">ResetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey">ResetCertificatePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointAccessMode">ResetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication">ResetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn">ResetOwnershipVerificationCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn">ResetRegionalCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName">ResetRegionalCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRoutingMode">ResetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(ApiGatewayDomainNameEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `PutMutualTlsAuthentication` <a name="PutMutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication"></a>

```csharp
private void PutMutualTlsAuthentication(ApiGatewayDomainNameMutualTlsAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiGatewayDomainNameTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a>

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetCertificateBody` <a name="ResetCertificateBody" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateBody"></a>

```csharp
private void ResetCertificateBody()
```

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateChain"></a>

```csharp
private void ResetCertificateChain()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetCertificatePrivateKey` <a name="ResetCertificatePrivateKey" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetCertificatePrivateKey"></a>

```csharp
private void ResetCertificatePrivateKey()
```

##### `ResetEndpointAccessMode` <a name="ResetEndpointAccessMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointAccessMode"></a>

```csharp
private void ResetEndpointAccessMode()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMutualTlsAuthentication` <a name="ResetMutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetMutualTlsAuthentication"></a>

```csharp
private void ResetMutualTlsAuthentication()
```

##### `ResetOwnershipVerificationCertificateArn` <a name="ResetOwnershipVerificationCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetOwnershipVerificationCertificateArn"></a>

```csharp
private void ResetOwnershipVerificationCertificateArn()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegionalCertificateArn` <a name="ResetRegionalCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateArn"></a>

```csharp
private void ResetRegionalCertificateArn()
```

##### `ResetRegionalCertificateName` <a name="ResetRegionalCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRegionalCertificateName"></a>

```csharp
private void ResetRegionalCertificateName()
```

##### `ResetRoutingMode` <a name="ResetRoutingMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetRoutingMode"></a>

```csharp
private void ResetRoutingMode()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiGatewayDomainName resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainName.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainName.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainName.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainName.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiGatewayDomainName resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayDomainName to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayDomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiGatewayDomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate">CertificateUploadDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName">CloudfrontDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId">CloudfrontZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameId">DomainNameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName">RegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId">RegionalZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference">ApiGatewayDomainNameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput">CertificateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput">CertificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput">CertificatePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessModeInput">EndpointAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput">MutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput">OwnershipVerificationCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput">RegionalCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput">RegionalCertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.routingModeInput">RoutingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody">CertificateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey">CertificatePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.routingMode">RoutingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateUploadDate`<sup>Required</sup> <a name="CertificateUploadDate" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateUploadDate"></a>

```csharp
public string CertificateUploadDate { get; }
```

- *Type:* string

---

##### `CloudfrontDomainName`<sup>Required</sup> <a name="CloudfrontDomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontDomainName"></a>

```csharp
public string CloudfrontDomainName { get; }
```

- *Type:* string

---

##### `CloudfrontZoneId`<sup>Required</sup> <a name="CloudfrontZoneId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.cloudfrontZoneId"></a>

```csharp
public string CloudfrontZoneId { get; }
```

- *Type:* string

---

##### `DomainNameId`<sup>Required</sup> <a name="DomainNameId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameId"></a>

```csharp
public string DomainNameId { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfiguration"></a>

```csharp
public ApiGatewayDomainNameEndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference">ApiGatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `MutualTlsAuthentication`<sup>Required</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthentication"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthenticationOutputReference MutualTlsAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference">ApiGatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `RegionalDomainName`<sup>Required</sup> <a name="RegionalDomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalDomainName"></a>

```csharp
public string RegionalDomainName { get; }
```

- *Type:* string

---

##### `RegionalZoneId`<sup>Required</sup> <a name="RegionalZoneId" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalZoneId"></a>

```csharp
public string RegionalZoneId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeouts"></a>

```csharp
public ApiGatewayDomainNameTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference">ApiGatewayDomainNameTimeoutsOutputReference</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `CertificateBodyInput`<sup>Optional</sup> <a name="CertificateBodyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBodyInput"></a>

```csharp
public string CertificateBodyInput { get; }
```

- *Type:* string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChainInput"></a>

```csharp
public string CertificateChainInput { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `CertificatePrivateKeyInput`<sup>Optional</sup> <a name="CertificatePrivateKeyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKeyInput"></a>

```csharp
public string CertificatePrivateKeyInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EndpointAccessModeInput`<sup>Optional</sup> <a name="EndpointAccessModeInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessModeInput"></a>

```csharp
public string EndpointAccessModeInput { get; }
```

- *Type:* string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointConfigurationInput"></a>

```csharp
public ApiGatewayDomainNameEndpointConfiguration EndpointConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MutualTlsAuthenticationInput`<sup>Optional</sup> <a name="MutualTlsAuthenticationInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.mutualTlsAuthenticationInput"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthentication MutualTlsAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---

##### `OwnershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArnInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArnInput"></a>

```csharp
public string OwnershipVerificationCertificateArnInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionalCertificateArnInput`<sup>Optional</sup> <a name="RegionalCertificateArnInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArnInput"></a>

```csharp
public string RegionalCertificateArnInput { get; }
```

- *Type:* string

---

##### `RegionalCertificateNameInput`<sup>Optional</sup> <a name="RegionalCertificateNameInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateNameInput"></a>

```csharp
public string RegionalCertificateNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoutingModeInput`<sup>Optional</sup> <a name="RoutingModeInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.routingModeInput"></a>

```csharp
public string RoutingModeInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiGatewayDomainNameTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a>

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `CertificateBody`<sup>Required</sup> <a name="CertificateBody" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateBody"></a>

```csharp
public string CertificateBody { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `CertificatePrivateKey`<sup>Required</sup> <a name="CertificatePrivateKey" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.certificatePrivateKey"></a>

```csharp
public string CertificatePrivateKey { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnershipVerificationCertificateArn`<sup>Required</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```csharp
public string OwnershipVerificationCertificateArn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegionalCertificateArn`<sup>Required</sup> <a name="RegionalCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateArn"></a>

```csharp
public string RegionalCertificateArn { get; }
```

- *Type:* string

---

##### `RegionalCertificateName`<sup>Required</sup> <a name="RegionalCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.regionalCertificateName"></a>

```csharp
public string RegionalCertificateName { get; }
```

- *Type:* string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.routingMode"></a>

```csharp
public string RoutingMode { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainName.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameConfig <a name="ApiGatewayDomainNameConfig" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string CertificateArn = null,
    string CertificateBody = null,
    string CertificateChain = null,
    string CertificateName = null,
    string CertificatePrivateKey = null,
    string EndpointAccessMode = null,
    ApiGatewayDomainNameEndpointConfiguration EndpointConfiguration = null,
    string Id = null,
    ApiGatewayDomainNameMutualTlsAuthentication MutualTlsAuthentication = null,
    string OwnershipVerificationCertificateArn = null,
    string Policy = null,
    string Region = null,
    string RegionalCertificateArn = null,
    string RegionalCertificateName = null,
    string RoutingMode = null,
    string SecurityPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ApiGatewayDomainNameTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody">CertificateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain">CertificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey">CertificatePrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#endpoint_access_mode ApiGatewayDomainName#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#id ApiGatewayDomainName#id}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#policy ApiGatewayDomainName#policy}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.routingMode">RoutingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#routing_mode ApiGatewayDomainName#routing_mode}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#tags ApiGatewayDomainName#tags}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#domain_name ApiGatewayDomainName#domain_name}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_arn ApiGatewayDomainName#certificate_arn}.

---

##### `CertificateBody`<sup>Optional</sup> <a name="CertificateBody" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateBody"></a>

```csharp
public string CertificateBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_body ApiGatewayDomainName#certificate_body}.

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateChain"></a>

```csharp
public string CertificateChain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_chain ApiGatewayDomainName#certificate_chain}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_name ApiGatewayDomainName#certificate_name}.

---

##### `CertificatePrivateKey`<sup>Optional</sup> <a name="CertificatePrivateKey" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.certificatePrivateKey"></a>

```csharp
public string CertificatePrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#certificate_private_key ApiGatewayDomainName#certificate_private_key}.

---

##### `EndpointAccessMode`<sup>Optional</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#endpoint_access_mode ApiGatewayDomainName#endpoint_access_mode}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.endpointConfiguration"></a>

```csharp
public ApiGatewayDomainNameEndpointConfiguration EndpointConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#id ApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutualTlsAuthentication`<sup>Optional</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.mutualTlsAuthentication"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthentication MutualTlsAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}

---

##### `OwnershipVerificationCertificateArn`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.ownershipVerificationCertificateArn"></a>

```csharp
public string OwnershipVerificationCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#ownership_verification_certificate_arn ApiGatewayDomainName#ownership_verification_certificate_arn}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#policy ApiGatewayDomainName#policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#region ApiGatewayDomainName#region}

---

##### `RegionalCertificateArn`<sup>Optional</sup> <a name="RegionalCertificateArn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateArn"></a>

```csharp
public string RegionalCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}.

---

##### `RegionalCertificateName`<sup>Optional</sup> <a name="RegionalCertificateName" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.regionalCertificateName"></a>

```csharp
public string RegionalCertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}.

---

##### `RoutingMode`<sup>Optional</sup> <a name="RoutingMode" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.routingMode"></a>

```csharp
public string RoutingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#routing_mode ApiGatewayDomainName#routing_mode}.

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#security_policy ApiGatewayDomainName#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#tags ApiGatewayDomainName#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#tags_all ApiGatewayDomainName#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameConfig.property.timeouts"></a>

```csharp
public ApiGatewayDomainNameTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#timeouts ApiGatewayDomainName#timeouts}

---

### ApiGatewayDomainNameEndpointConfiguration <a name="ApiGatewayDomainNameEndpointConfiguration" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameEndpointConfiguration {
    string[] Types,
    string IpAddressType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types">Types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#types ApiGatewayDomainName#types}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#ip_address_type ApiGatewayDomainName#ip_address_type}. |

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#types ApiGatewayDomainName#types}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#ip_address_type ApiGatewayDomainName#ip_address_type}.

---

### ApiGatewayDomainNameMutualTlsAuthentication <a name="ApiGatewayDomainNameMutualTlsAuthentication" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameMutualTlsAuthentication {
    string TruststoreUri,
    string TruststoreVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion">TruststoreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}. |

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#truststore_uri ApiGatewayDomainName#truststore_uri}.

---

##### `TruststoreVersion`<sup>Optional</sup> <a name="TruststoreVersion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```csharp
public string TruststoreVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#truststore_version ApiGatewayDomainName#truststore_version}.

---

### ApiGatewayDomainNameTimeouts <a name="ApiGatewayDomainNameTimeouts" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#create ApiGatewayDomainName#create}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#update ApiGatewayDomainName#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#create ApiGatewayDomainName#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/api_gateway_domain_name#update ApiGatewayDomainName#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDomainNameEndpointConfigurationOutputReference <a name="ApiGatewayDomainNameEndpointConfigurationOutputReference" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayDomainNameEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameEndpointConfiguration">ApiGatewayDomainNameEndpointConfiguration</a>

---


### ApiGatewayDomainNameMutualTlsAuthenticationOutputReference <a name="ApiGatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">ResetTruststoreVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTruststoreVersion` <a name="ResetTruststoreVersion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```csharp
private void ResetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">TruststoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">TruststoreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">TruststoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TruststoreUriInput`<sup>Optional</sup> <a name="TruststoreUriInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```csharp
public string TruststoreUriInput { get; }
```

- *Type:* string

---

##### `TruststoreVersionInput`<sup>Optional</sup> <a name="TruststoreVersionInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```csharp
public string TruststoreVersionInput { get; }
```

- *Type:* string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```csharp
public string TruststoreUri { get; }
```

- *Type:* string

---

##### `TruststoreVersion`<sup>Required</sup> <a name="TruststoreVersion" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```csharp
public string TruststoreVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayDomainNameMutualTlsAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameMutualTlsAuthentication">ApiGatewayDomainNameMutualTlsAuthentication</a>

---


### ApiGatewayDomainNameTimeoutsOutputReference <a name="ApiGatewayDomainNameTimeoutsOutputReference" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiGatewayDomainNameTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apiGatewayDomainName.ApiGatewayDomainNameTimeouts">ApiGatewayDomainNameTimeouts</a>

---



