# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktn/provider-aws.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktn/provider-aws.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object aws_s3_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3Object.S3Object.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3Object(Construct Scope, string Id, S3ObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig">S3ObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.s3Object.S3Object.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig">S3ObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.putOverrideProvider">PutOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetBucketKeyEnabled">ResetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetChecksumAlgorithm">ResetChecksumAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus">ResetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetOverrideProvider">ResetOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetSourceHash">ResetSourceHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3Object.S3Object.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3Object.S3Object.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3Object.S3Object.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3Object.S3Object.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3Object.S3Object.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3Object.S3Object.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3Object.S3Object.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3Object.S3Object.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3Object.S3Object.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3Object.S3Object.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3Object.S3Object.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3Object.S3Object.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3Object.S3Object.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3Object.S3Object.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3Object.S3Object.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3Object.S3Object.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOverrideProvider` <a name="PutOverrideProvider" id="@cdktn/provider-aws.s3Object.S3Object.putOverrideProvider"></a>

```csharp
private void PutOverrideProvider(S3ObjectOverrideProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3Object.S3Object.putOverrideProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktn/provider-aws.s3Object.S3Object.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktn/provider-aws.s3Object.S3Object.resetBucketKeyEnabled"></a>

```csharp
private void ResetBucketKeyEnabled()
```

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktn/provider-aws.s3Object.S3Object.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetChecksumAlgorithm` <a name="ResetChecksumAlgorithm" id="@cdktn/provider-aws.s3Object.S3Object.resetChecksumAlgorithm"></a>

```csharp
private void ResetChecksumAlgorithm()
```

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-aws.s3Object.S3Object.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktn/provider-aws.s3Object.S3Object.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktn/provider-aws.s3Object.S3Object.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktn/provider-aws.s3Object.S3Object.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktn/provider-aws.s3Object.S3Object.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-aws.s3Object.S3Object.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-aws.s3Object.S3Object.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-aws.s3Object.S3Object.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.s3Object.S3Object.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.s3Object.S3Object.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-aws.s3Object.S3Object.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetObjectLockLegalHoldStatus` <a name="ResetObjectLockLegalHoldStatus" id="@cdktn/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus"></a>

```csharp
private void ResetObjectLockLegalHoldStatus()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktn/provider-aws.s3Object.S3Object.resetObjectLockMode"></a>

```csharp
private void ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktn/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```csharp
private void ResetObjectLockRetainUntilDate()
```

##### `ResetOverrideProvider` <a name="ResetOverrideProvider" id="@cdktn/provider-aws.s3Object.S3Object.resetOverrideProvider"></a>

```csharp
private void ResetOverrideProvider()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3Object.S3Object.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktn/provider-aws.s3Object.S3Object.resetServerSideEncryption"></a>

```csharp
private void ResetServerSideEncryption()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.s3Object.S3Object.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceHash` <a name="ResetSourceHash" id="@cdktn/provider-aws.s3Object.S3Object.resetSourceHash"></a>

```csharp
private void ResetSourceHash()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-aws.s3Object.S3Object.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.s3Object.S3Object.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.s3Object.S3Object.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktn/provider-aws.s3Object.S3Object.resetWebsiteRedirect"></a>

```csharp
private void ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3Object resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3Object.S3Object.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3Object.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3Object.S3Object.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3Object.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3Object.S3Object.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3Object.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3Object.S3Object.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3Object.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3Object resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3Object to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumCrc32">ChecksumCrc32</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumCrc32C">ChecksumCrc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumCrc64Nvme">ChecksumCrc64Nvme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumSha1">ChecksumSha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumSha256">ChecksumSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.overrideProvider">OverrideProvider</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference">S3ObjectOverrideProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumAlgorithmInput">ChecksumAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput">ObjectLockLegalHoldStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.overrideProviderInput">OverrideProviderInput</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.sourceHashInput">SourceHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.checksumAlgorithm">ChecksumAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.sourceHash">SourceHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3Object.S3Object.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3Object.S3Object.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3Object.S3Object.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3Object.S3Object.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3Object.S3Object.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3Object.S3Object.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3Object.S3Object.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3Object.S3Object.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3Object.S3Object.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3Object.S3Object.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3Object.S3Object.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3Object.S3Object.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3Object.S3Object.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.s3Object.S3Object.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChecksumCrc32`<sup>Required</sup> <a name="ChecksumCrc32" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumCrc32"></a>

```csharp
public string ChecksumCrc32 { get; }
```

- *Type:* string

---

##### `ChecksumCrc32C`<sup>Required</sup> <a name="ChecksumCrc32C" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumCrc32C"></a>

```csharp
public string ChecksumCrc32C { get; }
```

- *Type:* string

---

##### `ChecksumCrc64Nvme`<sup>Required</sup> <a name="ChecksumCrc64Nvme" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumCrc64Nvme"></a>

```csharp
public string ChecksumCrc64Nvme { get; }
```

- *Type:* string

---

##### `ChecksumSha1`<sup>Required</sup> <a name="ChecksumSha1" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumSha1"></a>

```csharp
public string ChecksumSha1 { get; }
```

- *Type:* string

---

##### `ChecksumSha256`<sup>Required</sup> <a name="ChecksumSha256" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumSha256"></a>

```csharp
public string ChecksumSha256 { get; }
```

- *Type:* string

---

##### `OverrideProvider`<sup>Required</sup> <a name="OverrideProvider" id="@cdktn/provider-aws.s3Object.S3Object.property.overrideProvider"></a>

```csharp
public S3ObjectOverrideProviderOutputReference OverrideProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference">S3ObjectOverrideProviderOutputReference</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-aws.s3Object.S3Object.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktn/provider-aws.s3Object.S3Object.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.s3Object.S3Object.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktn/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput"></a>

```csharp
public bool|IResolvable BucketKeyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktn/provider-aws.s3Object.S3Object.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ChecksumAlgorithmInput`<sup>Optional</sup> <a name="ChecksumAlgorithmInput" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumAlgorithmInput"></a>

```csharp
public string ChecksumAlgorithmInput { get; }
```

- *Type:* string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktn/provider-aws.s3Object.S3Object.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktn/provider-aws.s3Object.S3Object.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktn/provider-aws.s3Object.S3Object.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-aws.s3Object.S3Object.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktn/provider-aws.s3Object.S3Object.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-aws.s3Object.S3Object.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-aws.s3Object.S3Object.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-aws.s3Object.S3Object.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.s3Object.S3Object.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.s3Object.S3Object.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.s3Object.S3Object.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-aws.s3Object.S3Object.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ObjectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatusInput" id="@cdktn/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput"></a>

```csharp
public string ObjectLockLegalHoldStatusInput { get; }
```

- *Type:* string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktn/provider-aws.s3Object.S3Object.property.objectLockModeInput"></a>

```csharp
public string ObjectLockModeInput { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktn/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```csharp
public string ObjectLockRetainUntilDateInput { get; }
```

- *Type:* string

---

##### `OverrideProviderInput`<sup>Optional</sup> <a name="OverrideProviderInput" id="@cdktn/provider-aws.s3Object.S3Object.property.overrideProviderInput"></a>

```csharp
public S3ObjectOverrideProvider OverrideProviderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3Object.S3Object.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktn/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```csharp
public string ServerSideEncryptionInput { get; }
```

- *Type:* string

---

##### `SourceHashInput`<sup>Optional</sup> <a name="SourceHashInput" id="@cdktn/provider-aws.s3Object.S3Object.property.sourceHashInput"></a>

```csharp
public string SourceHashInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.s3Object.S3Object.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-aws.s3Object.S3Object.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.s3Object.S3Object.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.s3Object.S3Object.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktn/provider-aws.s3Object.S3Object.property.websiteRedirectInput"></a>

```csharp
public string WebsiteRedirectInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktn/provider-aws.s3Object.S3Object.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.s3Object.S3Object.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktn/provider-aws.s3Object.S3Object.property.bucketKeyEnabled"></a>

```csharp
public bool|IResolvable BucketKeyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktn/provider-aws.s3Object.S3Object.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ChecksumAlgorithm`<sup>Required</sup> <a name="ChecksumAlgorithm" id="@cdktn/provider-aws.s3Object.S3Object.property.checksumAlgorithm"></a>

```csharp
public string ChecksumAlgorithm { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-aws.s3Object.S3Object.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktn/provider-aws.s3Object.S3Object.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktn/provider-aws.s3Object.S3Object.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktn/provider-aws.s3Object.S3Object.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktn/provider-aws.s3Object.S3Object.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-aws.s3Object.S3Object.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.s3Object.S3Object.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.s3Object.S3Object.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3Object.S3Object.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.s3Object.S3Object.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.s3Object.S3Object.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.s3Object.S3Object.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ObjectLockLegalHoldStatus`<sup>Required</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktn/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus"></a>

```csharp
public string ObjectLockLegalHoldStatus { get; }
```

- *Type:* string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktn/provider-aws.s3Object.S3Object.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktn/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3Object.S3Object.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktn/provider-aws.s3Object.S3Object.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.s3Object.S3Object.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceHash`<sup>Required</sup> <a name="SourceHash" id="@cdktn/provider-aws.s3Object.S3Object.property.sourceHash"></a>

```csharp
public string SourceHash { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-aws.s3Object.S3Object.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.s3Object.S3Object.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.s3Object.S3Object.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktn/provider-aws.s3Object.S3Object.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3Object.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3Object.S3Object.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktn/provider-aws.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ObjectConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string Key,
    string Acl = null,
    bool|IResolvable BucketKeyEnabled = null,
    string CacheControl = null,
    string ChecksumAlgorithm = null,
    string Content = null,
    string ContentBase64 = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    string Etag = null,
    bool|IResolvable ForceDestroy = null,
    string Id = null,
    string KmsKeyId = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string ObjectLockLegalHoldStatus = null,
    string ObjectLockMode = null,
    string ObjectLockRetainUntilDate = null,
    S3ObjectOverrideProvider OverrideProvider = null,
    string Region = null,
    string ServerSideEncryption = null,
    string Source = null,
    string SourceHash = null,
    string StorageClass = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string WebsiteRedirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#key S3Object#key}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.checksumAlgorithm">ChecksumAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content S3Object#content}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentBase64">ContentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#id S3Object#id}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.overrideProvider">OverrideProvider</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | override_provider block. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#source S3Object#source}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.sourceHash">SourceHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#bucket S3Object#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#key S3Object#key}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#acl S3Object#acl}.

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled"></a>

```csharp
public bool|IResolvable BucketKeyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#cache_control S3Object#cache_control}.

---

##### `ChecksumAlgorithm`<sup>Optional</sup> <a name="ChecksumAlgorithm" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.checksumAlgorithm"></a>

```csharp
public string ChecksumAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content S3Object#content}.

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_base64 S3Object#content_base64}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_disposition S3Object#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_encoding S3Object#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_language S3Object#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#content_type S3Object#content_type}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#etag S3Object#etag}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#force_destroy S3Object#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#metadata S3Object#metadata}.

---

##### `ObjectLockLegalHoldStatus`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus"></a>

```csharp
public string ObjectLockLegalHoldStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `OverrideProvider`<sup>Optional</sup> <a name="OverrideProvider" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.overrideProvider"></a>

```csharp
public S3ObjectOverrideProvider OverrideProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

override_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#override_provider S3Object#override_provider}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#region S3Object#region}

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#source S3Object#source}.

---

##### `SourceHash`<sup>Optional</sup> <a name="SourceHash" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.sourceHash"></a>

```csharp
public string SourceHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#source_hash S3Object#source_hash}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#storage_class S3Object#storage_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#tags S3Object#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#tags_all S3Object#tags_all}.

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktn/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#website_redirect S3Object#website_redirect}.

---

### S3ObjectOverrideProvider <a name="S3ObjectOverrideProvider" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ObjectOverrideProvider {
    S3ObjectOverrideProviderDefaultTags DefaultTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider.property.defaultTags">DefaultTags</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | default_tags block. |

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider.property.defaultTags"></a>

```csharp
public S3ObjectOverrideProviderDefaultTags DefaultTags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#default_tags S3Object#default_tags}

---

### S3ObjectOverrideProviderDefaultTags <a name="S3ObjectOverrideProviderDefaultTags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ObjectOverrideProviderDefaultTags {
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#tags S3Object#tags}. |

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3_object#tags S3Object#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectOverrideProviderDefaultTagsOutputReference <a name="S3ObjectOverrideProviderDefaultTagsOutputReference" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ObjectOverrideProviderDefaultTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.internalValue"></a>

```csharp
public S3ObjectOverrideProviderDefaultTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---


### S3ObjectOverrideProviderOutputReference <a name="S3ObjectOverrideProviderOutputReference" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ObjectOverrideProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags">PutDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultTags` <a name="PutDefaultTags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags"></a>

```csharp
private void PutDefaultTags(S3ObjectOverrideProviderDefaultTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resetDefaultTags"></a>

```csharp
private void ResetDefaultTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTags">DefaultTags</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference">S3ObjectOverrideProviderDefaultTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTagsInput">DefaultTagsInput</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTags"></a>

```csharp
public S3ObjectOverrideProviderDefaultTagsOutputReference DefaultTags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference">S3ObjectOverrideProviderDefaultTagsOutputReference</a>

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTagsInput"></a>

```csharp
public S3ObjectOverrideProviderDefaultTags DefaultTagsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.internalValue"></a>

```csharp
public S3ObjectOverrideProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---



