# `kmsCustomKeyStore` Submodule <a name="`kmsCustomKeyStore` Submodule" id="@cdktn/provider-aws.kmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCustomKeyStore <a name="KmsCustomKeyStore" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsCustomKeyStore(Construct Scope, string Id, KmsCustomKeyStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig">KmsCustomKeyStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig">KmsCustomKeyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential">PutXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCloudHsmClusterId">ResetCloudHsmClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCustomKeyStoreType">ResetCustomKeyStoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetKeyStorePassword">ResetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTrustAnchorCertificate">ResetTrustAnchorCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyAuthenticationCredential">ResetXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyConnectivity">ResetXksProxyConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriEndpoint">ResetXksProxyUriEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriPath">ResetXksProxyUriPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyVpcEndpointServiceName">ResetXksProxyVpcEndpointServiceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts"></a>

```csharp
private void PutTimeouts(KmsCustomKeyStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---

##### `PutXksProxyAuthenticationCredential` <a name="PutXksProxyAuthenticationCredential" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential"></a>

```csharp
private void PutXksProxyAuthenticationCredential(KmsCustomKeyStoreXksProxyAuthenticationCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---

##### `ResetCloudHsmClusterId` <a name="ResetCloudHsmClusterId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCloudHsmClusterId"></a>

```csharp
private void ResetCloudHsmClusterId()
```

##### `ResetCustomKeyStoreType` <a name="ResetCustomKeyStoreType" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCustomKeyStoreType"></a>

```csharp
private void ResetCustomKeyStoreType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyStorePassword` <a name="ResetKeyStorePassword" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetKeyStorePassword"></a>

```csharp
private void ResetKeyStorePassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrustAnchorCertificate` <a name="ResetTrustAnchorCertificate" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTrustAnchorCertificate"></a>

```csharp
private void ResetTrustAnchorCertificate()
```

##### `ResetXksProxyAuthenticationCredential` <a name="ResetXksProxyAuthenticationCredential" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyAuthenticationCredential"></a>

```csharp
private void ResetXksProxyAuthenticationCredential()
```

##### `ResetXksProxyConnectivity` <a name="ResetXksProxyConnectivity" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyConnectivity"></a>

```csharp
private void ResetXksProxyConnectivity()
```

##### `ResetXksProxyUriEndpoint` <a name="ResetXksProxyUriEndpoint" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriEndpoint"></a>

```csharp
private void ResetXksProxyUriEndpoint()
```

##### `ResetXksProxyUriPath` <a name="ResetXksProxyUriPath" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriPath"></a>

```csharp
private void ResetXksProxyUriPath()
```

##### `ResetXksProxyVpcEndpointServiceName` <a name="ResetXksProxyVpcEndpointServiceName" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyVpcEndpointServiceName"></a>

```csharp
private void ResetXksProxyVpcEndpointServiceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmsCustomKeyStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsCustomKeyStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsCustomKeyStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsCustomKeyStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsCustomKeyStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KmsCustomKeyStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsCustomKeyStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsCustomKeyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KmsCustomKeyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredential">XksProxyAuthenticationCredential</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference">KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput">CloudHsmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput">CustomKeyStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreTypeInput">CustomKeyStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput">KeyStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput">TrustAnchorCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredentialInput">XksProxyAuthenticationCredentialInput</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivityInput">XksProxyConnectivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpointInput">XksProxyUriEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPathInput">XksProxyUriPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceNameInput">XksProxyVpcEndpointServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId">CloudHsmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName">CustomKeyStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreType">CustomKeyStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword">KeyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate">TrustAnchorCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivity">XksProxyConnectivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpoint">XksProxyUriEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPath">XksProxyUriPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceName">XksProxyVpcEndpointServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts"></a>

```csharp
public KmsCustomKeyStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a>

---

##### `XksProxyAuthenticationCredential`<sup>Required</sup> <a name="XksProxyAuthenticationCredential" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredential"></a>

```csharp
public KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference XksProxyAuthenticationCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference">KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference</a>

---

##### `CloudHsmClusterIdInput`<sup>Optional</sup> <a name="CloudHsmClusterIdInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput"></a>

```csharp
public string CloudHsmClusterIdInput { get; }
```

- *Type:* string

---

##### `CustomKeyStoreNameInput`<sup>Optional</sup> <a name="CustomKeyStoreNameInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```csharp
public string CustomKeyStoreNameInput { get; }
```

- *Type:* string

---

##### `CustomKeyStoreTypeInput`<sup>Optional</sup> <a name="CustomKeyStoreTypeInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreTypeInput"></a>

```csharp
public string CustomKeyStoreTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyStorePasswordInput`<sup>Optional</sup> <a name="KeyStorePasswordInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput"></a>

```csharp
public string KeyStorePasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput"></a>

```csharp
public IResolvable|KmsCustomKeyStoreTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---

##### `TrustAnchorCertificateInput`<sup>Optional</sup> <a name="TrustAnchorCertificateInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput"></a>

```csharp
public string TrustAnchorCertificateInput { get; }
```

- *Type:* string

---

##### `XksProxyAuthenticationCredentialInput`<sup>Optional</sup> <a name="XksProxyAuthenticationCredentialInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredentialInput"></a>

```csharp
public KmsCustomKeyStoreXksProxyAuthenticationCredential XksProxyAuthenticationCredentialInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---

##### `XksProxyConnectivityInput`<sup>Optional</sup> <a name="XksProxyConnectivityInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivityInput"></a>

```csharp
public string XksProxyConnectivityInput { get; }
```

- *Type:* string

---

##### `XksProxyUriEndpointInput`<sup>Optional</sup> <a name="XksProxyUriEndpointInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpointInput"></a>

```csharp
public string XksProxyUriEndpointInput { get; }
```

- *Type:* string

---

##### `XksProxyUriPathInput`<sup>Optional</sup> <a name="XksProxyUriPathInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPathInput"></a>

```csharp
public string XksProxyUriPathInput { get; }
```

- *Type:* string

---

##### `XksProxyVpcEndpointServiceNameInput`<sup>Optional</sup> <a name="XksProxyVpcEndpointServiceNameInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceNameInput"></a>

```csharp
public string XksProxyVpcEndpointServiceNameInput { get; }
```

- *Type:* string

---

##### `CloudHsmClusterId`<sup>Required</sup> <a name="CloudHsmClusterId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId"></a>

```csharp
public string CloudHsmClusterId { get; }
```

- *Type:* string

---

##### `CustomKeyStoreName`<sup>Required</sup> <a name="CustomKeyStoreName" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName"></a>

```csharp
public string CustomKeyStoreName { get; }
```

- *Type:* string

---

##### `CustomKeyStoreType`<sup>Required</sup> <a name="CustomKeyStoreType" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreType"></a>

```csharp
public string CustomKeyStoreType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword"></a>

```csharp
public string KeyStorePassword { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TrustAnchorCertificate`<sup>Required</sup> <a name="TrustAnchorCertificate" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate"></a>

```csharp
public string TrustAnchorCertificate { get; }
```

- *Type:* string

---

##### `XksProxyConnectivity`<sup>Required</sup> <a name="XksProxyConnectivity" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivity"></a>

```csharp
public string XksProxyConnectivity { get; }
```

- *Type:* string

---

##### `XksProxyUriEndpoint`<sup>Required</sup> <a name="XksProxyUriEndpoint" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpoint"></a>

```csharp
public string XksProxyUriEndpoint { get; }
```

- *Type:* string

---

##### `XksProxyUriPath`<sup>Required</sup> <a name="XksProxyUriPath" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPath"></a>

```csharp
public string XksProxyUriPath { get; }
```

- *Type:* string

---

##### `XksProxyVpcEndpointServiceName`<sup>Required</sup> <a name="XksProxyVpcEndpointServiceName" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceName"></a>

```csharp
public string XksProxyVpcEndpointServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCustomKeyStoreConfig <a name="KmsCustomKeyStoreConfig" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsCustomKeyStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomKeyStoreName,
    string CloudHsmClusterId = null,
    string CustomKeyStoreType = null,
    string Id = null,
    string KeyStorePassword = null,
    string Region = null,
    KmsCustomKeyStoreTimeouts Timeouts = null,
    string TrustAnchorCertificate = null,
    KmsCustomKeyStoreXksProxyAuthenticationCredential XksProxyAuthenticationCredential = null,
    string XksProxyConnectivity = null,
    string XksProxyUriEndpoint = null,
    string XksProxyUriPath = null,
    string XksProxyVpcEndpointServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName">CustomKeyStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId">CloudHsmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreType">CustomKeyStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword">KeyStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate">TrustAnchorCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyAuthenticationCredential">XksProxyAuthenticationCredential</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | xks_proxy_authentication_credential block. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyConnectivity">XksProxyConnectivity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriEndpoint">XksProxyUriEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriPath">XksProxyUriPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyVpcEndpointServiceName">XksProxyVpcEndpointServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomKeyStoreName`<sup>Required</sup> <a name="CustomKeyStoreName" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```csharp
public string CustomKeyStoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `CloudHsmClusterId`<sup>Optional</sup> <a name="CloudHsmClusterId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId"></a>

```csharp
public string CloudHsmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `CustomKeyStoreType`<sup>Optional</sup> <a name="CustomKeyStoreType" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreType"></a>

```csharp
public string CustomKeyStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyStorePassword`<sup>Optional</sup> <a name="KeyStorePassword" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword"></a>

```csharp
public string KeyStorePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#region KmsCustomKeyStore#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts"></a>

```csharp
public KmsCustomKeyStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

##### `TrustAnchorCertificate`<sup>Optional</sup> <a name="TrustAnchorCertificate" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate"></a>

```csharp
public string TrustAnchorCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `XksProxyAuthenticationCredential`<sup>Optional</sup> <a name="XksProxyAuthenticationCredential" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyAuthenticationCredential"></a>

```csharp
public KmsCustomKeyStoreXksProxyAuthenticationCredential XksProxyAuthenticationCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

xks_proxy_authentication_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}

---

##### `XksProxyConnectivity`<sup>Optional</sup> <a name="XksProxyConnectivity" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyConnectivity"></a>

```csharp
public string XksProxyConnectivity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}.

---

##### `XksProxyUriEndpoint`<sup>Optional</sup> <a name="XksProxyUriEndpoint" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriEndpoint"></a>

```csharp
public string XksProxyUriEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}.

---

##### `XksProxyUriPath`<sup>Optional</sup> <a name="XksProxyUriPath" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriPath"></a>

```csharp
public string XksProxyUriPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}.

---

##### `XksProxyVpcEndpointServiceName`<sup>Optional</sup> <a name="XksProxyVpcEndpointServiceName" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyVpcEndpointServiceName"></a>

```csharp
public string XksProxyVpcEndpointServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}.

---

### KmsCustomKeyStoreTimeouts <a name="KmsCustomKeyStoreTimeouts" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsCustomKeyStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

### KmsCustomKeyStoreXksProxyAuthenticationCredential <a name="KmsCustomKeyStoreXksProxyAuthenticationCredential" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsCustomKeyStoreXksProxyAuthenticationCredential {
    string AccessKeyId,
    string RawSecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.rawSecretAccessKey">RawSecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}.

---

##### `RawSecretAccessKey`<sup>Required</sup> <a name="RawSecretAccessKey" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.rawSecretAccessKey"></a>

```csharp
public string RawSecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCustomKeyStoreTimeoutsOutputReference <a name="KmsCustomKeyStoreTimeoutsOutputReference" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsCustomKeyStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KmsCustomKeyStoreTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---


### KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference <a name="KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKeyInput">RawSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKey">RawSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `RawSecretAccessKeyInput`<sup>Optional</sup> <a name="RawSecretAccessKeyInput" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKeyInput"></a>

```csharp
public string RawSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `RawSecretAccessKey`<sup>Required</sup> <a name="RawSecretAccessKey" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKey"></a>

```csharp
public string RawSecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.internalValue"></a>

```csharp
public KmsCustomKeyStoreXksProxyAuthenticationCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---



