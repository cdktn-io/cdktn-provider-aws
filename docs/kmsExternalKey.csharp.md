# `kmsExternalKey` Submodule <a name="`kmsExternalKey` Submodule" id="@cdktn/provider-aws.kmsExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsExternalKey <a name="KmsExternalKey" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key aws_kms_external_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsExternalKey(Construct Scope, string Id, KmsExternalKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig">KmsExternalKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig">KmsExternalKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays">ResetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64">ResetKeyMaterialBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetKeySpec">ResetKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion">ResetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo">ResetValidTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```csharp
private void ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays"></a>

```csharp
private void ResetDeletionWindowInDays()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyMaterialBase64` <a name="ResetKeyMaterialBase64" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64"></a>

```csharp
private void ResetKeyMaterialBase64()
```

##### `ResetKeySpec` <a name="ResetKeySpec" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetKeySpec"></a>

```csharp
private void ResetKeySpec()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyUsage"></a>

```csharp
private void ResetKeyUsage()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion"></a>

```csharp
private void ResetMultiRegion()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetValidTo` <a name="ResetValidTo" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo"></a>

```csharp
private void ResetValidTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmsExternalKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsExternalKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsExternalKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsExternalKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KmsExternalKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KmsExternalKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsExternalKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsExternalKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KmsExternalKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel">ExpirationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState">KeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input">KeyMaterialBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keySpecInput">KeySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsageInput">KeyUsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput">MultiRegionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput">ValidToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64">KeyMaterialBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keySpec">KeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage">KeyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion">MultiRegion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo">ValidTo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ExpirationModel`<sup>Required</sup> <a name="ExpirationModel" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel"></a>

```csharp
public string ExpirationModel { get; }
```

- *Type:* string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState"></a>

```csharp
public string KeyState { get; }
```

- *Type:* string

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```csharp
public bool|IResolvable BypassPolicyLockoutSafetyCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput"></a>

```csharp
public double DeletionWindowInDaysInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyMaterialBase64Input`<sup>Optional</sup> <a name="KeyMaterialBase64Input" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input"></a>

```csharp
public string KeyMaterialBase64Input { get; }
```

- *Type:* string

---

##### `KeySpecInput`<sup>Optional</sup> <a name="KeySpecInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keySpecInput"></a>

```csharp
public string KeySpecInput { get; }
```

- *Type:* string

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsageInput"></a>

```csharp
public string KeyUsageInput { get; }
```

- *Type:* string

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput"></a>

```csharp
public bool|IResolvable MultiRegionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidToInput`<sup>Optional</sup> <a name="ValidToInput" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput"></a>

```csharp
public string ValidToInput { get; }
```

- *Type:* string

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public bool|IResolvable BypassPolicyLockoutSafetyCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyMaterialBase64`<sup>Required</sup> <a name="KeyMaterialBase64" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64"></a>

```csharp
public string KeyMaterialBase64 { get; }
```

- *Type:* string

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keySpec"></a>

```csharp
public string KeySpec { get; }
```

- *Type:* string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage"></a>

```csharp
public string KeyUsage { get; }
```

- *Type:* string

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion"></a>

```csharp
public bool|IResolvable MultiRegion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidTo`<sup>Required</sup> <a name="ValidTo" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo"></a>

```csharp
public string ValidTo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsExternalKeyConfig <a name="KmsExternalKeyConfig" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KmsExternalKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable BypassPolicyLockoutSafetyCheck = null,
    double DeletionWindowInDays = null,
    string Description = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string KeyMaterialBase64 = null,
    string KeySpec = null,
    string KeyUsage = null,
    bool|IResolvable MultiRegion = null,
    string Policy = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string ValidTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#description KmsExternalKey#description}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#enabled KmsExternalKey#enabled}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#id KmsExternalKey#id}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64">KeyMaterialBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keySpec">KeySpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#key_spec KmsExternalKey#key_spec}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyUsage">KeyUsage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#key_usage KmsExternalKey#key_usage}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion">MultiRegion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#multi_region KmsExternalKey#multi_region}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#policy KmsExternalKey#policy}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#tags KmsExternalKey#tags}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#tags_all KmsExternalKey#tags_all}. |
| <code><a href="#@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo">ValidTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#valid_to KmsExternalKey#valid_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```csharp
public bool|IResolvable BypassPolicyLockoutSafetyCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#description KmsExternalKey#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#enabled KmsExternalKey#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#id KmsExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyMaterialBase64`<sup>Optional</sup> <a name="KeyMaterialBase64" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64"></a>

```csharp
public string KeyMaterialBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}.

---

##### `KeySpec`<sup>Optional</sup> <a name="KeySpec" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keySpec"></a>

```csharp
public string KeySpec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#key_spec KmsExternalKey#key_spec}.

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyUsage"></a>

```csharp
public string KeyUsage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#key_usage KmsExternalKey#key_usage}.

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion"></a>

```csharp
public bool|IResolvable MultiRegion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#multi_region KmsExternalKey#multi_region}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#policy KmsExternalKey#policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#region KmsExternalKey#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#tags KmsExternalKey#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#tags_all KmsExternalKey#tags_all}.

---

##### `ValidTo`<sup>Optional</sup> <a name="ValidTo" id="@cdktn/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo"></a>

```csharp
public string ValidTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kms_external_key#valid_to KmsExternalKey#valid_to}.

---



