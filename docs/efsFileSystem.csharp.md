# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktn/provider-aws.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystem(Construct Scope, string Id, EfsFileSystemConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy">PutLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.putProtection">PutProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken">ResetCreationToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy">ResetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode">ResetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetProtection">ResetProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">ResetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLifecyclePolicy` <a name="PutLifecyclePolicy" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy"></a>

```csharp
private void PutLifecyclePolicy(IResolvable|EfsFileSystemLifecyclePolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

---

##### `PutProtection` <a name="PutProtection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.putProtection"></a>

```csharp
private void PutProtection(EfsFileSystemProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.putProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a>

---

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```csharp
private void ResetAvailabilityZoneName()
```

##### `ResetCreationToken` <a name="ResetCreationToken" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken"></a>

```csharp
private void ResetCreationToken()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLifecyclePolicy` <a name="ResetLifecyclePolicy" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy"></a>

```csharp
private void ResetLifecyclePolicy()
```

##### `ResetPerformanceMode` <a name="ResetPerformanceMode" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```csharp
private void ResetPerformanceMode()
```

##### `ResetProtection` <a name="ResetProtection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetProtection"></a>

```csharp
private void ResetProtection()
```

##### `ResetProvisionedThroughputInMibps` <a name="ResetProvisionedThroughputInMibps" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```csharp
private void ResetProvisionedThroughputInMibps()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```csharp
private void ResetThroughputMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EfsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EfsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EfsFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EfsFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EfsFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets">NumberOfMountTargets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.protection">Protection</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference">EfsFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes">SizeInBytes</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput">CreationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput">EncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput">LifecyclePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput">PerformanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.protectionInput">ProtectionInput</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">ProvisionedThroughputInMibpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput">ThroughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken">CreationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode">PerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy"></a>

```csharp
public EfsFileSystemLifecyclePolicyList LifecyclePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfMountTargets`<sup>Required</sup> <a name="NumberOfMountTargets" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets"></a>

```csharp
public double NumberOfMountTargets { get; }
```

- *Type:* double

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Protection`<sup>Required</sup> <a name="Protection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.protection"></a>

```csharp
public EfsFileSystemProtectionOutputReference Protection { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference">EfsFileSystemProtectionOutputReference</a>

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes"></a>

```csharp
public EfsFileSystemSizeInBytesList SizeInBytes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a>

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```csharp
public string AvailabilityZoneNameInput { get; }
```

- *Type:* string

---

##### `CreationTokenInput`<sup>Optional</sup> <a name="CreationTokenInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput"></a>

```csharp
public string CreationTokenInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```csharp
public bool|IResolvable EncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LifecyclePolicyInput`<sup>Optional</sup> <a name="LifecyclePolicyInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicy[] LifecyclePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

---

##### `PerformanceModeInput`<sup>Optional</sup> <a name="PerformanceModeInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```csharp
public string PerformanceModeInput { get; }
```

- *Type:* string

---

##### `ProtectionInput`<sup>Optional</sup> <a name="ProtectionInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.protectionInput"></a>

```csharp
public EfsFileSystemProtection ProtectionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a>

---

##### `ProvisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="ProvisionedThroughputInMibpsInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```csharp
public double ProvisionedThroughputInMibpsInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```csharp
public string ThroughputModeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; }
```

- *Type:* string

---

##### `CreationToken`<sup>Required</sup> <a name="CreationToken" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken"></a>

```csharp
public string CreationToken { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceMode`<sup>Required</sup> <a name="PerformanceMode" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```csharp
public string PerformanceMode { get; }
```

- *Type:* string

---

##### `ProvisionedThroughputInMibps`<sup>Required</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```csharp
public double ProvisionedThroughputInMibps { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZoneName = null,
    string CreationToken = null,
    bool|IResolvable Encrypted = null,
    string Id = null,
    string KmsKeyId = null,
    IResolvable|EfsFileSystemLifecyclePolicy[] LifecyclePolicy = null,
    string PerformanceMode = null,
    EfsFileSystemProtection Protection = null,
    double ProvisionedThroughputInMibps = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string ThroughputMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken">CreationToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#creation_token EfsFileSystem#creation_token}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted">Encrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#id EfsFileSystem#id}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]</code> | lifecycle_policy block. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode">PerformanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.protection">Protection</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a></code> | protection block. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#tags EfsFileSystem#tags}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#tags_all EfsFileSystem#tags_all}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}.

---

##### `CreationToken`<sup>Optional</sup> <a name="CreationToken" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken"></a>

```csharp
public string CreationToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#creation_token EfsFileSystem#creation_token}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```csharp
public bool|IResolvable Encrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#id EfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}.

---

##### `LifecyclePolicy`<sup>Optional</sup> <a name="LifecyclePolicy" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicy[] LifecyclePolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}

---

##### `PerformanceMode`<sup>Optional</sup> <a name="PerformanceMode" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```csharp
public string PerformanceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}.

---

##### `Protection`<sup>Optional</sup> <a name="Protection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.protection"></a>

```csharp
public EfsFileSystemProtection Protection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a>

protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#protection EfsFileSystem#protection}

---

##### `ProvisionedThroughputInMibps`<sup>Optional</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```csharp
public double ProvisionedThroughputInMibps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#region EfsFileSystem#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#tags EfsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#tags_all EfsFileSystem#tags_all}.

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}.

---

### EfsFileSystemLifecyclePolicy <a name="EfsFileSystemLifecyclePolicy" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemLifecyclePolicy {
    string TransitionToArchive = null,
    string TransitionToIa = null,
    string TransitionToPrimaryStorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToArchive">TransitionToArchive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa">TransitionToIa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}. |

---

##### `TransitionToArchive`<sup>Optional</sup> <a name="TransitionToArchive" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToArchive"></a>

```csharp
public string TransitionToArchive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}.

---

##### `TransitionToIa`<sup>Optional</sup> <a name="TransitionToIa" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa"></a>

```csharp
public string TransitionToIa { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}.

---

##### `TransitionToPrimaryStorageClass`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass"></a>

```csharp
public string TransitionToPrimaryStorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}.

---

### EfsFileSystemProtection <a name="EfsFileSystemProtection" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemProtection {
    string ReplicationOverwrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection.property.replicationOverwrite">ReplicationOverwrite</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#replication_overwrite EfsFileSystem#replication_overwrite}. |

---

##### `ReplicationOverwrite`<sup>Optional</sup> <a name="ReplicationOverwrite" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection.property.replicationOverwrite"></a>

```csharp
public string ReplicationOverwrite { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/efs_file_system#replication_overwrite EfsFileSystem#replication_overwrite}.

---

### EfsFileSystemSizeInBytes <a name="EfsFileSystemSizeInBytes" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemSizeInBytes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemLifecyclePolicyList <a name="EfsFileSystemLifecyclePolicyList" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemLifecyclePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get"></a>

```csharp
private EfsFileSystemLifecyclePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

---


### EfsFileSystemLifecyclePolicyOutputReference <a name="EfsFileSystemLifecyclePolicyOutputReference" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemLifecyclePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToArchive">ResetTransitionToArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa">ResetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass">ResetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransitionToArchive` <a name="ResetTransitionToArchive" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToArchive"></a>

```csharp
private void ResetTransitionToArchive()
```

##### `ResetTransitionToIa` <a name="ResetTransitionToIa" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa"></a>

```csharp
private void ResetTransitionToIa()
```

##### `ResetTransitionToPrimaryStorageClass` <a name="ResetTransitionToPrimaryStorageClass" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass"></a>

```csharp
private void ResetTransitionToPrimaryStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToArchiveInput">TransitionToArchiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput">TransitionToIaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput">TransitionToPrimaryStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToArchive">TransitionToArchive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">TransitionToIa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransitionToArchiveInput`<sup>Optional</sup> <a name="TransitionToArchiveInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToArchiveInput"></a>

```csharp
public string TransitionToArchiveInput { get; }
```

- *Type:* string

---

##### `TransitionToIaInput`<sup>Optional</sup> <a name="TransitionToIaInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput"></a>

```csharp
public string TransitionToIaInput { get; }
```

- *Type:* string

---

##### `TransitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClassInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```csharp
public string TransitionToPrimaryStorageClassInput { get; }
```

- *Type:* string

---

##### `TransitionToArchive`<sup>Required</sup> <a name="TransitionToArchive" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToArchive"></a>

```csharp
public string TransitionToArchive { get; }
```

- *Type:* string

---

##### `TransitionToIa`<sup>Required</sup> <a name="TransitionToIa" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```csharp
public string TransitionToIa { get; }
```

- *Type:* string

---

##### `TransitionToPrimaryStorageClass`<sup>Required</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```csharp
public string TransitionToPrimaryStorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EfsFileSystemLifecyclePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>

---


### EfsFileSystemProtectionOutputReference <a name="EfsFileSystemProtectionOutputReference" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.resetReplicationOverwrite">ResetReplicationOverwrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationOverwrite` <a name="ResetReplicationOverwrite" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.resetReplicationOverwrite"></a>

```csharp
private void ResetReplicationOverwrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.replicationOverwriteInput">ReplicationOverwriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.replicationOverwrite">ReplicationOverwrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationOverwriteInput`<sup>Optional</sup> <a name="ReplicationOverwriteInput" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.replicationOverwriteInput"></a>

```csharp
public string ReplicationOverwriteInput { get; }
```

- *Type:* string

---

##### `ReplicationOverwrite`<sup>Required</sup> <a name="ReplicationOverwrite" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.replicationOverwrite"></a>

```csharp
public string ReplicationOverwrite { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtectionOutputReference.property.internalValue"></a>

```csharp
public EfsFileSystemProtection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemProtection">EfsFileSystemProtection</a>

---


### EfsFileSystemSizeInBytesList <a name="EfsFileSystemSizeInBytesList" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemSizeInBytesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get"></a>

```csharp
private EfsFileSystemSizeInBytesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EfsFileSystemSizeInBytesOutputReference <a name="EfsFileSystemSizeInBytesOutputReference" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EfsFileSystemSizeInBytesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa">ValueInIa</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard">ValueInStandard</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `ValueInIa`<sup>Required</sup> <a name="ValueInIa" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa"></a>

```csharp
public double ValueInIa { get; }
```

- *Type:* double

---

##### `ValueInStandard`<sup>Required</sup> <a name="ValueInStandard" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard"></a>

```csharp
public double ValueInStandard { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue"></a>

```csharp
public EfsFileSystemSizeInBytes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a>

---



