# `datasyncLocationFsxWindowsFileSystem` Submodule <a name="`datasyncLocationFsxWindowsFileSystem` Submodule" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxWindowsFileSystem <a name="DatasyncLocationFsxWindowsFileSystem" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system aws_datasync_location_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationFsxWindowsFileSystem(Construct Scope, string Id, DatasyncLocationFsxWindowsFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory"></a>

```csharp
private void ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationFsxWindowsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatasyncLocationFsxWindowsFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationFsxWindowsFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationFsxWindowsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxWindowsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput">FsxFilesystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FsxFilesystemArnInput`<sup>Optional</sup> <a name="FsxFilesystemArnInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput"></a>

```csharp
public string FsxFilesystemArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput"></a>

```csharp
public string[] SecurityGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn"></a>

```csharp
public string FsxFilesystemArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; }
```

- *Type:* string[]

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxWindowsFileSystemConfig <a name="DatasyncLocationFsxWindowsFileSystemConfig" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatasyncLocationFsxWindowsFileSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FsxFilesystemArn,
    string Password,
    string[] SecurityGroupArns,
    string User,
    string Domain = null,
    string Id = null,
    string Region = null,
    string Subdirectory = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn"></a>

```csharp
public string FsxFilesystemArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}.

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#region DatasyncLocationFsxWindowsFileSystem#region}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.

---



