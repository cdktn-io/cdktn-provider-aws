# `datasyncLocationEfs` Submodule <a name="`datasyncLocationEfs` Submodule" id="@cdktn/provider-aws.datasyncLocationEfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationEfs <a name="DatasyncLocationEfs" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs aws_datasync_location_efs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationEfs(Construct Scope, string Id, DatasyncLocationEfsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig">DatasyncLocationEfsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig">DatasyncLocationEfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config">PutEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetAccessPointArn">ResetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetFileSystemAccessRoleArn">ResetFileSystemAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetInTransitEncryption">ResetInTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEc2Config` <a name="PutEc2Config" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config"></a>

```csharp
private void PutEc2Config(DatasyncLocationEfsEc2Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `ResetAccessPointArn` <a name="ResetAccessPointArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetAccessPointArn"></a>

```csharp
private void ResetAccessPointArn()
```

##### `ResetFileSystemAccessRoleArn` <a name="ResetFileSystemAccessRoleArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetFileSystemAccessRoleArn"></a>

```csharp
private void ResetFileSystemAccessRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInTransitEncryption` <a name="ResetInTransitEncryption" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetInTransitEncryption"></a>

```csharp
private void ResetInTransitEncryption()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory"></a>

```csharp
private void ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationEfs resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationEfs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationEfs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationEfs.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationEfs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncLocationEfs resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationEfs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationEfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationEfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config">Ec2Config</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArnInput">AccessPointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput">Ec2ConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput">EfsFileSystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArnInput">FileSystemAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryptionInput">InTransitEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn">EfsFileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArn">FileSystemAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryption">InTransitEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Ec2Config`<sup>Required</sup> <a name="Ec2Config" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config"></a>

```csharp
public DatasyncLocationEfsEc2ConfigOutputReference Ec2Config { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AccessPointArnInput`<sup>Optional</sup> <a name="AccessPointArnInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArnInput"></a>

```csharp
public string AccessPointArnInput { get; }
```

- *Type:* string

---

##### `Ec2ConfigInput`<sup>Optional</sup> <a name="Ec2ConfigInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput"></a>

```csharp
public DatasyncLocationEfsEc2Config Ec2ConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `EfsFileSystemArnInput`<sup>Optional</sup> <a name="EfsFileSystemArnInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput"></a>

```csharp
public string EfsFileSystemArnInput { get; }
```

- *Type:* string

---

##### `FileSystemAccessRoleArnInput`<sup>Optional</sup> <a name="FileSystemAccessRoleArnInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArnInput"></a>

```csharp
public string FileSystemAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InTransitEncryptionInput`<sup>Optional</sup> <a name="InTransitEncryptionInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryptionInput"></a>

```csharp
public string InTransitEncryptionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; }
```

- *Type:* string

---

##### `EfsFileSystemArn`<sup>Required</sup> <a name="EfsFileSystemArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn"></a>

```csharp
public string EfsFileSystemArn { get; }
```

- *Type:* string

---

##### `FileSystemAccessRoleArn`<sup>Required</sup> <a name="FileSystemAccessRoleArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArn"></a>

```csharp
public string FileSystemAccessRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InTransitEncryption`<sup>Required</sup> <a name="InTransitEncryption" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryption"></a>

```csharp
public string InTransitEncryption { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationEfsConfig <a name="DatasyncLocationEfsConfig" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationEfsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DatasyncLocationEfsEc2Config Ec2Config,
    string EfsFileSystemArn,
    string AccessPointArn = null,
    string FileSystemAccessRoleArn = null,
    string Id = null,
    string InTransitEncryption = null,
    string Region = null,
    string Subdirectory = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config">Ec2Config</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | ec2_config block. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn">EfsFileSystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.accessPointArn">AccessPointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.fileSystemAccessRoleArn">FileSystemAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#id DatasyncLocationEfs#id}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.inTransitEncryption">InTransitEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Ec2Config`<sup>Required</sup> <a name="Ec2Config" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config"></a>

```csharp
public DatasyncLocationEfsEc2Config Ec2Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

ec2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}

---

##### `EfsFileSystemArn`<sup>Required</sup> <a name="EfsFileSystemArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn"></a>

```csharp
public string EfsFileSystemArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}.

---

##### `AccessPointArn`<sup>Optional</sup> <a name="AccessPointArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.accessPointArn"></a>

```csharp
public string AccessPointArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}.

---

##### `FileSystemAccessRoleArn`<sup>Optional</sup> <a name="FileSystemAccessRoleArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.fileSystemAccessRoleArn"></a>

```csharp
public string FileSystemAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#id DatasyncLocationEfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InTransitEncryption`<sup>Optional</sup> <a name="InTransitEncryption" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.inTransitEncryption"></a>

```csharp
public string InTransitEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#region DatasyncLocationEfs#region}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}.

---

### DatasyncLocationEfsEc2Config <a name="DatasyncLocationEfsEc2Config" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationEfsEc2Config {
    string[] SecurityGroupArns,
    string SubnetArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn">SubnetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}. |

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}.

---

##### `SubnetArn`<sup>Required</sup> <a name="SubnetArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn"></a>

```csharp
public string SubnetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationEfsEc2ConfigOutputReference <a name="DatasyncLocationEfsEc2ConfigOutputReference" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationEfsEc2ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput">SubnetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn">SubnetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput"></a>

```csharp
public string[] SecurityGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `SubnetArnInput`<sup>Optional</sup> <a name="SubnetArnInput" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput"></a>

```csharp
public string SubnetArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; }
```

- *Type:* string[]

---

##### `SubnetArn`<sup>Required</sup> <a name="SubnetArn" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn"></a>

```csharp
public string SubnetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue"></a>

```csharp
public DatasyncLocationEfsEc2Config InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---



