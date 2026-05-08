# `transferServer` Submodule <a name="`transferServer` Submodule" id="@cdktn/provider-aws.transferServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferServer <a name="TransferServer" id="@cdktn/provider-aws.transferServer.TransferServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server aws_transfer_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServer(Construct Scope, string Id, TransferServerConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transferServer.TransferServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferServer.TransferServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.transferServer.TransferServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerConfig">TransferServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.putEndpointDetails">PutEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.putProtocolDetails">PutProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.putS3StorageOptions">PutS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.putWorkflowDetails">PutWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetEndpointDetails">ResetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetIdentityProviderType">ResetIdentityProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetInvocationRole">ResetInvocationRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetLoggingRole">ResetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner">ResetPostAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner">ResetPreAuthenticationLoginBanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetProtocolDetails">ResetProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetS3StorageOptions">ResetS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetSecurityPolicyName">ResetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetSftpAuthenticationMethods">ResetSftpAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetStructuredLogDestinations">ResetStructuredLogDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.resetWorkflowDetails">ResetWorkflowDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.transferServer.TransferServer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.transferServer.TransferServer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.transferServer.TransferServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.transferServer.TransferServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.transferServer.TransferServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.transferServer.TransferServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.transferServer.TransferServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.transferServer.TransferServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.transferServer.TransferServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.transferServer.TransferServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.transferServer.TransferServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transferServer.TransferServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.transferServer.TransferServer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.transferServer.TransferServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferServer.TransferServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferServer.TransferServer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.transferServer.TransferServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferServer.TransferServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.transferServer.TransferServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transferServer.TransferServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.transferServer.TransferServer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.transferServer.TransferServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferServer.TransferServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointDetails` <a name="PutEndpointDetails" id="@cdktn/provider-aws.transferServer.TransferServer.putEndpointDetails"></a>

```csharp
private void PutEndpointDetails(TransferServerEndpointDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServer.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `PutProtocolDetails` <a name="PutProtocolDetails" id="@cdktn/provider-aws.transferServer.TransferServer.putProtocolDetails"></a>

```csharp
private void PutProtocolDetails(TransferServerProtocolDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServer.putProtocolDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `PutS3StorageOptions` <a name="PutS3StorageOptions" id="@cdktn/provider-aws.transferServer.TransferServer.putS3StorageOptions"></a>

```csharp
private void PutS3StorageOptions(TransferServerS3StorageOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServer.putS3StorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `PutWorkflowDetails` <a name="PutWorkflowDetails" id="@cdktn/provider-aws.transferServer.TransferServer.putWorkflowDetails"></a>

```csharp
private void PutWorkflowDetails(TransferServerWorkflowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServer.putWorkflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-aws.transferServer.TransferServer.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-aws.transferServer.TransferServer.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-aws.transferServer.TransferServer.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetEndpointDetails` <a name="ResetEndpointDetails" id="@cdktn/provider-aws.transferServer.TransferServer.resetEndpointDetails"></a>

```csharp
private void ResetEndpointDetails()
```

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-aws.transferServer.TransferServer.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-aws.transferServer.TransferServer.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktn/provider-aws.transferServer.TransferServer.resetFunction"></a>

```csharp
private void ResetFunction()
```

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktn/provider-aws.transferServer.TransferServer.resetHostKey"></a>

```csharp
private void ResetHostKey()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.transferServer.TransferServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderType` <a name="ResetIdentityProviderType" id="@cdktn/provider-aws.transferServer.TransferServer.resetIdentityProviderType"></a>

```csharp
private void ResetIdentityProviderType()
```

##### `ResetInvocationRole` <a name="ResetInvocationRole" id="@cdktn/provider-aws.transferServer.TransferServer.resetInvocationRole"></a>

```csharp
private void ResetInvocationRole()
```

##### `ResetLoggingRole` <a name="ResetLoggingRole" id="@cdktn/provider-aws.transferServer.TransferServer.resetLoggingRole"></a>

```csharp
private void ResetLoggingRole()
```

##### `ResetPostAuthenticationLoginBanner` <a name="ResetPostAuthenticationLoginBanner" id="@cdktn/provider-aws.transferServer.TransferServer.resetPostAuthenticationLoginBanner"></a>

```csharp
private void ResetPostAuthenticationLoginBanner()
```

##### `ResetPreAuthenticationLoginBanner` <a name="ResetPreAuthenticationLoginBanner" id="@cdktn/provider-aws.transferServer.TransferServer.resetPreAuthenticationLoginBanner"></a>

```csharp
private void ResetPreAuthenticationLoginBanner()
```

##### `ResetProtocolDetails` <a name="ResetProtocolDetails" id="@cdktn/provider-aws.transferServer.TransferServer.resetProtocolDetails"></a>

```csharp
private void ResetProtocolDetails()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-aws.transferServer.TransferServer.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.transferServer.TransferServer.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetS3StorageOptions` <a name="ResetS3StorageOptions" id="@cdktn/provider-aws.transferServer.TransferServer.resetS3StorageOptions"></a>

```csharp
private void ResetS3StorageOptions()
```

##### `ResetSecurityPolicyName` <a name="ResetSecurityPolicyName" id="@cdktn/provider-aws.transferServer.TransferServer.resetSecurityPolicyName"></a>

```csharp
private void ResetSecurityPolicyName()
```

##### `ResetSftpAuthenticationMethods` <a name="ResetSftpAuthenticationMethods" id="@cdktn/provider-aws.transferServer.TransferServer.resetSftpAuthenticationMethods"></a>

```csharp
private void ResetSftpAuthenticationMethods()
```

##### `ResetStructuredLogDestinations` <a name="ResetStructuredLogDestinations" id="@cdktn/provider-aws.transferServer.TransferServer.resetStructuredLogDestinations"></a>

```csharp
private void ResetStructuredLogDestinations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.transferServer.TransferServer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.transferServer.TransferServer.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-aws.transferServer.TransferServer.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetWorkflowDetails` <a name="ResetWorkflowDetails" id="@cdktn/provider-aws.transferServer.TransferServer.resetWorkflowDetails"></a>

```csharp
private void ResetWorkflowDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransferServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.transferServer.TransferServer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transferServer.TransferServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.transferServer.TransferServer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transferServer.TransferServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.transferServer.TransferServer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transferServer.TransferServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.transferServer.TransferServer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TransferServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransferServer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferServer.TransferServer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransferServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint">HostKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.protocolDetails">ProtocolDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.s3StorageOptions">S3StorageOptions</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.endpointDetailsInput">EndpointDetailsInput</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.hostKeyInput">HostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput">IdentityProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.invocationRoleInput">InvocationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.loggingRoleInput">LoggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput">PostAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput">PreAuthenticationLoginBannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.protocolDetailsInput">ProtocolDetailsInput</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.s3StorageOptionsInput">S3StorageOptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput">SecurityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethodsInput">SftpAuthenticationMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.structuredLogDestinationsInput">StructuredLogDestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.workflowDetailsInput">WorkflowDetailsInput</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.identityProviderType">IdentityProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.invocationRole">InvocationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.loggingRole">LoggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.securityPolicyName">SecurityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethods">SftpAuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.structuredLogDestinations">StructuredLogDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.transferServer.TransferServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.transferServer.TransferServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.transferServer.TransferServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.transferServer.TransferServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.transferServer.TransferServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.transferServer.TransferServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transferServer.TransferServer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transferServer.TransferServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transferServer.TransferServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transferServer.TransferServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transferServer.TransferServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferServer.TransferServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transferServer.TransferServer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.transferServer.TransferServer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.transferServer.TransferServer.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-aws.transferServer.TransferServer.property.endpointDetails"></a>

```csharp
public TransferServerEndpointDetailsOutputReference EndpointDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference">TransferServerEndpointDetailsOutputReference</a>

---

##### `HostKeyFingerprint`<sup>Required</sup> <a name="HostKeyFingerprint" id="@cdktn/provider-aws.transferServer.TransferServer.property.hostKeyFingerprint"></a>

```csharp
public string HostKeyFingerprint { get; }
```

- *Type:* string

---

##### `ProtocolDetails`<sup>Required</sup> <a name="ProtocolDetails" id="@cdktn/provider-aws.transferServer.TransferServer.property.protocolDetails"></a>

```csharp
public TransferServerProtocolDetailsOutputReference ProtocolDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference">TransferServerProtocolDetailsOutputReference</a>

---

##### `S3StorageOptions`<sup>Required</sup> <a name="S3StorageOptions" id="@cdktn/provider-aws.transferServer.TransferServer.property.s3StorageOptions"></a>

```csharp
public TransferServerS3StorageOptionsOutputReference S3StorageOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference">TransferServerS3StorageOptionsOutputReference</a>

---

##### `WorkflowDetails`<sup>Required</sup> <a name="WorkflowDetails" id="@cdktn/provider-aws.transferServer.TransferServer.property.workflowDetails"></a>

```csharp
public TransferServerWorkflowDetailsOutputReference WorkflowDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference">TransferServerWorkflowDetailsOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EndpointDetailsInput`<sup>Optional</sup> <a name="EndpointDetailsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.endpointDetailsInput"></a>

```csharp
public TransferServerEndpointDetails EndpointDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.hostKeyInput"></a>

```csharp
public string HostKeyInput { get; }
```

- *Type:* string

---

##### `IdentityProviderTypeInput`<sup>Optional</sup> <a name="IdentityProviderTypeInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.identityProviderTypeInput"></a>

```csharp
public string IdentityProviderTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InvocationRoleInput`<sup>Optional</sup> <a name="InvocationRoleInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.invocationRoleInput"></a>

```csharp
public string InvocationRoleInput { get; }
```

- *Type:* string

---

##### `LoggingRoleInput`<sup>Optional</sup> <a name="LoggingRoleInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.loggingRoleInput"></a>

```csharp
public string LoggingRoleInput { get; }
```

- *Type:* string

---

##### `PostAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="PostAuthenticationLoginBannerInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBannerInput"></a>

```csharp
public string PostAuthenticationLoginBannerInput { get; }
```

- *Type:* string

---

##### `PreAuthenticationLoginBannerInput`<sup>Optional</sup> <a name="PreAuthenticationLoginBannerInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBannerInput"></a>

```csharp
public string PreAuthenticationLoginBannerInput { get; }
```

- *Type:* string

---

##### `ProtocolDetailsInput`<sup>Optional</sup> <a name="ProtocolDetailsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.protocolDetailsInput"></a>

```csharp
public TransferServerProtocolDetails ProtocolDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3StorageOptionsInput`<sup>Optional</sup> <a name="S3StorageOptionsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.s3StorageOptionsInput"></a>

```csharp
public TransferServerS3StorageOptions S3StorageOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---

##### `SecurityPolicyNameInput`<sup>Optional</sup> <a name="SecurityPolicyNameInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.securityPolicyNameInput"></a>

```csharp
public string SecurityPolicyNameInput { get; }
```

- *Type:* string

---

##### `SftpAuthenticationMethodsInput`<sup>Optional</sup> <a name="SftpAuthenticationMethodsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethodsInput"></a>

```csharp
public string SftpAuthenticationMethodsInput { get; }
```

- *Type:* string

---

##### `StructuredLogDestinationsInput`<sup>Optional</sup> <a name="StructuredLogDestinationsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.structuredLogDestinationsInput"></a>

```csharp
public string[] StructuredLogDestinationsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `WorkflowDetailsInput`<sup>Optional</sup> <a name="WorkflowDetailsInput" id="@cdktn/provider-aws.transferServer.TransferServer.property.workflowDetailsInput"></a>

```csharp
public TransferServerWorkflowDetails WorkflowDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-aws.transferServer.TransferServer.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.transferServer.TransferServer.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.transferServer.TransferServer.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.transferServer.TransferServer.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.transferServer.TransferServer.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-aws.transferServer.TransferServer.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktn/provider-aws.transferServer.TransferServer.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transferServer.TransferServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderType`<sup>Required</sup> <a name="IdentityProviderType" id="@cdktn/provider-aws.transferServer.TransferServer.property.identityProviderType"></a>

```csharp
public string IdentityProviderType { get; }
```

- *Type:* string

---

##### `InvocationRole`<sup>Required</sup> <a name="InvocationRole" id="@cdktn/provider-aws.transferServer.TransferServer.property.invocationRole"></a>

```csharp
public string InvocationRole { get; }
```

- *Type:* string

---

##### `LoggingRole`<sup>Required</sup> <a name="LoggingRole" id="@cdktn/provider-aws.transferServer.TransferServer.property.loggingRole"></a>

```csharp
public string LoggingRole { get; }
```

- *Type:* string

---

##### `PostAuthenticationLoginBanner`<sup>Required</sup> <a name="PostAuthenticationLoginBanner" id="@cdktn/provider-aws.transferServer.TransferServer.property.postAuthenticationLoginBanner"></a>

```csharp
public string PostAuthenticationLoginBanner { get; }
```

- *Type:* string

---

##### `PreAuthenticationLoginBanner`<sup>Required</sup> <a name="PreAuthenticationLoginBanner" id="@cdktn/provider-aws.transferServer.TransferServer.property.preAuthenticationLoginBanner"></a>

```csharp
public string PreAuthenticationLoginBanner { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-aws.transferServer.TransferServer.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.transferServer.TransferServer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityPolicyName`<sup>Required</sup> <a name="SecurityPolicyName" id="@cdktn/provider-aws.transferServer.TransferServer.property.securityPolicyName"></a>

```csharp
public string SecurityPolicyName { get; }
```

- *Type:* string

---

##### `SftpAuthenticationMethods`<sup>Required</sup> <a name="SftpAuthenticationMethods" id="@cdktn/provider-aws.transferServer.TransferServer.property.sftpAuthenticationMethods"></a>

```csharp
public string SftpAuthenticationMethods { get; }
```

- *Type:* string

---

##### `StructuredLogDestinations`<sup>Required</sup> <a name="StructuredLogDestinations" id="@cdktn/provider-aws.transferServer.TransferServer.property.structuredLogDestinations"></a>

```csharp
public string[] StructuredLogDestinations { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.transferServer.TransferServer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.transferServer.TransferServer.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-aws.transferServer.TransferServer.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.transferServer.TransferServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferServerConfig <a name="TransferServerConfig" id="@cdktn/provider-aws.transferServer.TransferServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Certificate = null,
    string DirectoryId = null,
    string Domain = null,
    TransferServerEndpointDetails EndpointDetails = null,
    string EndpointType = null,
    bool|IResolvable ForceDestroy = null,
    string Function = null,
    string HostKey = null,
    string Id = null,
    string IdentityProviderType = null,
    string InvocationRole = null,
    string LoggingRole = null,
    string PostAuthenticationLoginBanner = null,
    string PreAuthenticationLoginBanner = null,
    TransferServerProtocolDetails ProtocolDetails = null,
    string[] Protocols = null,
    string Region = null,
    TransferServerS3StorageOptions S3StorageOptions = null,
    string SecurityPolicyName = null,
    string SftpAuthenticationMethods = null,
    string[] StructuredLogDestinations = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Url = null,
    TransferServerWorkflowDetails WorkflowDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#certificate TransferServer#certificate}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#domain TransferServer#domain}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | endpoint_details block. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#function TransferServer#function}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.hostKey">HostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#host_key TransferServer#host_key}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#id TransferServer#id}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.identityProviderType">IdentityProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.invocationRole">InvocationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.loggingRole">LoggingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner">PostAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner">PreAuthenticationLoginBanner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.protocolDetails">ProtocolDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | protocol_details block. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#protocols TransferServer#protocols}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.s3StorageOptions">S3StorageOptions</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | s3_storage_options block. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName">SecurityPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.sftpAuthenticationMethods">SftpAuthenticationMethods</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.structuredLogDestinations">StructuredLogDestinations</a></code> | <code>string[]</code> | This is a set of arns of destinations that will receive structured logs from the transfer server. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#tags TransferServer#tags}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#url TransferServer#url}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerConfig.property.workflowDetails">WorkflowDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | workflow_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#certificate TransferServer#certificate}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#domain TransferServer#domain}.

---

##### `EndpointDetails`<sup>Optional</sup> <a name="EndpointDetails" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.endpointDetails"></a>

```csharp
public TransferServerEndpointDetails EndpointDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#function TransferServer#function}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.hostKey"></a>

```csharp
public string HostKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#host_key TransferServer#host_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#id TransferServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderType`<sup>Optional</sup> <a name="IdentityProviderType" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.identityProviderType"></a>

```csharp
public string IdentityProviderType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}.

---

##### `InvocationRole`<sup>Optional</sup> <a name="InvocationRole" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.invocationRole"></a>

```csharp
public string InvocationRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}.

---

##### `LoggingRole`<sup>Optional</sup> <a name="LoggingRole" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.loggingRole"></a>

```csharp
public string LoggingRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}.

---

##### `PostAuthenticationLoginBanner`<sup>Optional</sup> <a name="PostAuthenticationLoginBanner" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.postAuthenticationLoginBanner"></a>

```csharp
public string PostAuthenticationLoginBanner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}.

---

##### `PreAuthenticationLoginBanner`<sup>Optional</sup> <a name="PreAuthenticationLoginBanner" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.preAuthenticationLoginBanner"></a>

```csharp
public string PreAuthenticationLoginBanner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}.

---

##### `ProtocolDetails`<sup>Optional</sup> <a name="ProtocolDetails" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.protocolDetails"></a>

```csharp
public TransferServerProtocolDetails ProtocolDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

protocol_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#protocols TransferServer#protocols}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#region TransferServer#region}

---

##### `S3StorageOptions`<sup>Optional</sup> <a name="S3StorageOptions" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.s3StorageOptions"></a>

```csharp
public TransferServerS3StorageOptions S3StorageOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

s3_storage_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}

---

##### `SecurityPolicyName`<sup>Optional</sup> <a name="SecurityPolicyName" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.securityPolicyName"></a>

```csharp
public string SecurityPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}.

---

##### `SftpAuthenticationMethods`<sup>Optional</sup> <a name="SftpAuthenticationMethods" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.sftpAuthenticationMethods"></a>

```csharp
public string SftpAuthenticationMethods { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}.

---

##### `StructuredLogDestinations`<sup>Optional</sup> <a name="StructuredLogDestinations" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.structuredLogDestinations"></a>

```csharp
public string[] StructuredLogDestinations { get; set; }
```

- *Type:* string[]

This is a set of arns of destinations that will receive structured logs from the transfer server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#tags TransferServer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#url TransferServer#url}.

---

##### `WorkflowDetails`<sup>Optional</sup> <a name="WorkflowDetails" id="@cdktn/provider-aws.transferServer.TransferServerConfig.property.workflowDetails"></a>

```csharp
public TransferServerWorkflowDetails WorkflowDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

workflow_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}

---

### TransferServerEndpointDetails <a name="TransferServerEndpointDetails" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerEndpointDetails {
    string[] AddressAllocationIds = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    string VpcEndpointId = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}. |

---

##### `AddressAllocationIds`<sup>Optional</sup> <a name="AddressAllocationIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.addressAllocationIds"></a>

```csharp
public string[] AddressAllocationIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetails.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}.

---

### TransferServerProtocolDetails <a name="TransferServerProtocolDetails" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerProtocolDetails {
    string[] As2Transports = null,
    string PassiveIp = null,
    string SetStatOption = null,
    string TlsSessionResumptionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.as2Transports">As2Transports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#as2_transports TransferServer#as2_transports}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.passiveIp">PassiveIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.setStatOption">SetStatOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode">TlsSessionResumptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}. |

---

##### `As2Transports`<sup>Optional</sup> <a name="As2Transports" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.as2Transports"></a>

```csharp
public string[] As2Transports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#as2_transports TransferServer#as2_transports}.

---

##### `PassiveIp`<sup>Optional</sup> <a name="PassiveIp" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.passiveIp"></a>

```csharp
public string PassiveIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}.

---

##### `SetStatOption`<sup>Optional</sup> <a name="SetStatOption" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.setStatOption"></a>

```csharp
public string SetStatOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}.

---

##### `TlsSessionResumptionMode`<sup>Optional</sup> <a name="TlsSessionResumptionMode" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetails.property.tlsSessionResumptionMode"></a>

```csharp
public string TlsSessionResumptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}.

---

### TransferServerS3StorageOptions <a name="TransferServerS3StorageOptions" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerS3StorageOptions {
    string DirectoryListingOptimization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization">DirectoryListingOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}. |

---

##### `DirectoryListingOptimization`<sup>Optional</sup> <a name="DirectoryListingOptimization" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions.property.directoryListingOptimization"></a>

```csharp
public string DirectoryListingOptimization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}.

---

### TransferServerWorkflowDetails <a name="TransferServerWorkflowDetails" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerWorkflowDetails {
    TransferServerWorkflowDetailsOnPartialUpload OnPartialUpload = null,
    TransferServerWorkflowDetailsOnUpload OnUpload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails.property.onPartialUpload">OnPartialUpload</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | on_partial_upload block. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | on_upload block. |

---

##### `OnPartialUpload`<sup>Optional</sup> <a name="OnPartialUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails.property.onPartialUpload"></a>

```csharp
public TransferServerWorkflowDetailsOnPartialUpload OnPartialUpload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

on_partial_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}

---

##### `OnUpload`<sup>Optional</sup> <a name="OnUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails.property.onUpload"></a>

```csharp
public TransferServerWorkflowDetailsOnUpload OnUpload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

on_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}

---

### TransferServerWorkflowDetailsOnPartialUpload <a name="TransferServerWorkflowDetailsOnPartialUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerWorkflowDetailsOnPartialUpload {
    string ExecutionRole,
    string WorkflowId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId">WorkflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload.property.workflowId"></a>

```csharp
public string WorkflowId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

### TransferServerWorkflowDetailsOnUpload <a name="TransferServerWorkflowDetailsOnUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerWorkflowDetailsOnUpload {
    string ExecutionRole,
    string WorkflowId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId">WorkflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}. |

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}.

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload.property.workflowId"></a>

```csharp
public string WorkflowId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferServerEndpointDetailsOutputReference <a name="TransferServerEndpointDetailsOutputReference" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerEndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds">ResetAddressAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressAllocationIds` <a name="ResetAddressAllocationIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetAddressAllocationIds"></a>

```csharp
private void ResetAddressAllocationIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput">AddressAllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds">AddressAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressAllocationIdsInput`<sup>Optional</sup> <a name="AddressAllocationIdsInput" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIdsInput"></a>

```csharp
public string[] AddressAllocationIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AddressAllocationIds`<sup>Required</sup> <a name="AddressAllocationIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.addressAllocationIds"></a>

```csharp
public string[] AddressAllocationIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transferServer.TransferServerEndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferServerEndpointDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerEndpointDetails">TransferServerEndpointDetails</a>

---


### TransferServerProtocolDetailsOutputReference <a name="TransferServerProtocolDetailsOutputReference" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerProtocolDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports">ResetAs2Transports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp">ResetPassiveIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption">ResetSetStatOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode">ResetTlsSessionResumptionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAs2Transports` <a name="ResetAs2Transports" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetAs2Transports"></a>

```csharp
private void ResetAs2Transports()
```

##### `ResetPassiveIp` <a name="ResetPassiveIp" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetPassiveIp"></a>

```csharp
private void ResetPassiveIp()
```

##### `ResetSetStatOption` <a name="ResetSetStatOption" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetSetStatOption"></a>

```csharp
private void ResetSetStatOption()
```

##### `ResetTlsSessionResumptionMode` <a name="ResetTlsSessionResumptionMode" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.resetTlsSessionResumptionMode"></a>

```csharp
private void ResetTlsSessionResumptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput">As2TransportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput">PassiveIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput">SetStatOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput">TlsSessionResumptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports">As2Transports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp">PassiveIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption">SetStatOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode">TlsSessionResumptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `As2TransportsInput`<sup>Optional</sup> <a name="As2TransportsInput" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2TransportsInput"></a>

```csharp
public string[] As2TransportsInput { get; }
```

- *Type:* string[]

---

##### `PassiveIpInput`<sup>Optional</sup> <a name="PassiveIpInput" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIpInput"></a>

```csharp
public string PassiveIpInput { get; }
```

- *Type:* string

---

##### `SetStatOptionInput`<sup>Optional</sup> <a name="SetStatOptionInput" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOptionInput"></a>

```csharp
public string SetStatOptionInput { get; }
```

- *Type:* string

---

##### `TlsSessionResumptionModeInput`<sup>Optional</sup> <a name="TlsSessionResumptionModeInput" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionModeInput"></a>

```csharp
public string TlsSessionResumptionModeInput { get; }
```

- *Type:* string

---

##### `As2Transports`<sup>Required</sup> <a name="As2Transports" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.as2Transports"></a>

```csharp
public string[] As2Transports { get; }
```

- *Type:* string[]

---

##### `PassiveIp`<sup>Required</sup> <a name="PassiveIp" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.passiveIp"></a>

```csharp
public string PassiveIp { get; }
```

- *Type:* string

---

##### `SetStatOption`<sup>Required</sup> <a name="SetStatOption" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.setStatOption"></a>

```csharp
public string SetStatOption { get; }
```

- *Type:* string

---

##### `TlsSessionResumptionMode`<sup>Required</sup> <a name="TlsSessionResumptionMode" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.tlsSessionResumptionMode"></a>

```csharp
public string TlsSessionResumptionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transferServer.TransferServerProtocolDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferServerProtocolDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerProtocolDetails">TransferServerProtocolDetails</a>

---


### TransferServerS3StorageOptionsOutputReference <a name="TransferServerS3StorageOptionsOutputReference" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerS3StorageOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization">ResetDirectoryListingOptimization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryListingOptimization` <a name="ResetDirectoryListingOptimization" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.resetDirectoryListingOptimization"></a>

```csharp
private void ResetDirectoryListingOptimization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput">DirectoryListingOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization">DirectoryListingOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryListingOptimizationInput`<sup>Optional</sup> <a name="DirectoryListingOptimizationInput" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimizationInput"></a>

```csharp
public string DirectoryListingOptimizationInput { get; }
```

- *Type:* string

---

##### `DirectoryListingOptimization`<sup>Required</sup> <a name="DirectoryListingOptimization" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.directoryListingOptimization"></a>

```csharp
public string DirectoryListingOptimization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transferServer.TransferServerS3StorageOptionsOutputReference.property.internalValue"></a>

```csharp
public TransferServerS3StorageOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerS3StorageOptions">TransferServerS3StorageOptions</a>

---


### TransferServerWorkflowDetailsOnPartialUploadOutputReference <a name="TransferServerWorkflowDetailsOnPartialUploadOutputReference" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerWorkflowDetailsOnPartialUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput">WorkflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `WorkflowIdInput`<sup>Optional</sup> <a name="WorkflowIdInput" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowIdInput"></a>

```csharp
public string WorkflowIdInput { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference.property.internalValue"></a>

```csharp
public TransferServerWorkflowDetailsOnPartialUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---


### TransferServerWorkflowDetailsOnUploadOutputReference <a name="TransferServerWorkflowDetailsOnUploadOutputReference" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerWorkflowDetailsOnUploadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput">WorkflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `WorkflowIdInput`<sup>Optional</sup> <a name="WorkflowIdInput" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowIdInput"></a>

```csharp
public string WorkflowIdInput { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference.property.internalValue"></a>

```csharp
public TransferServerWorkflowDetailsOnUpload InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---


### TransferServerWorkflowDetailsOutputReference <a name="TransferServerWorkflowDetailsOutputReference" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TransferServerWorkflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload">PutOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload">PutOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload">ResetOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload">ResetOnUpload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnPartialUpload` <a name="PutOnPartialUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload"></a>

```csharp
private void PutOnPartialUpload(TransferServerWorkflowDetailsOnPartialUpload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnPartialUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---

##### `PutOnUpload` <a name="PutOnUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload"></a>

```csharp
private void PutOnUpload(TransferServerWorkflowDetailsOnUpload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.putOnUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `ResetOnPartialUpload` <a name="ResetOnPartialUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnPartialUpload"></a>

```csharp
private void ResetOnPartialUpload()
```

##### `ResetOnUpload` <a name="ResetOnUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.resetOnUpload"></a>

```csharp
private void ResetOnUpload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload">OnPartialUpload</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference">TransferServerWorkflowDetailsOnPartialUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload">OnUpload</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput">OnPartialUploadInput</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput">OnUploadInput</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnPartialUpload`<sup>Required</sup> <a name="OnPartialUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUpload"></a>

```csharp
public TransferServerWorkflowDetailsOnPartialUploadOutputReference OnPartialUpload { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUploadOutputReference">TransferServerWorkflowDetailsOnPartialUploadOutputReference</a>

---

##### `OnUpload`<sup>Required</sup> <a name="OnUpload" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUpload"></a>

```csharp
public TransferServerWorkflowDetailsOnUploadOutputReference OnUpload { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUploadOutputReference">TransferServerWorkflowDetailsOnUploadOutputReference</a>

---

##### `OnPartialUploadInput`<sup>Optional</sup> <a name="OnPartialUploadInput" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onPartialUploadInput"></a>

```csharp
public TransferServerWorkflowDetailsOnPartialUpload OnPartialUploadInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnPartialUpload">TransferServerWorkflowDetailsOnPartialUpload</a>

---

##### `OnUploadInput`<sup>Optional</sup> <a name="OnUploadInput" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.onUploadInput"></a>

```csharp
public TransferServerWorkflowDetailsOnUpload OnUploadInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOnUpload">TransferServerWorkflowDetailsOnUpload</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transferServer.TransferServerWorkflowDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferServerWorkflowDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transferServer.TransferServerWorkflowDetails">TransferServerWorkflowDetails</a>

---



