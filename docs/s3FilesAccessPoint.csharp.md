# `s3FilesAccessPoint` Submodule <a name="`s3FilesAccessPoint` Submodule" id="@cdktn/provider-aws.s3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesAccessPoint <a name="S3FilesAccessPoint" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point aws_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPoint(Construct Scope, string Id, S3FilesAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig">S3FilesAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig">S3FilesAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser">PutPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory">PutRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser"></a>

```csharp
private void PutPosixUser(IResolvable|S3FilesAccessPointPosixUser[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

---

##### `PutRootDirectory` <a name="PutRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory"></a>

```csharp
private void PutRootDirectory(IResolvable|S3FilesAccessPointRootDirectory[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts"></a>

```csharp
private void PutTimeouts(S3FilesAccessPointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser"></a>

```csharp
private void ResetPosixUser()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory"></a>

```csharp
private void ResetRootDirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesAccessPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesAccessPoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3FilesAccessPoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList">S3FilesAccessPointPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList">S3FilesAccessPointRootDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference">S3FilesAccessPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput">PosixUserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser"></a>

```csharp
public S3FilesAccessPointPosixUserList PosixUser { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList">S3FilesAccessPointPosixUserList</a>

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory"></a>

```csharp
public S3FilesAccessPointRootDirectoryList RootDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList">S3FilesAccessPointRootDirectoryList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeouts"></a>

```csharp
public S3FilesAccessPointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference">S3FilesAccessPointTimeoutsOutputReference</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput"></a>

```csharp
public IResolvable|S3FilesAccessPointPosixUser[] PosixUserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectory[] RootDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeoutsInput"></a>

```csharp
public IResolvable|S3FilesAccessPointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesAccessPointConfig <a name="S3FilesAccessPointConfig" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FileSystemId,
    IResolvable|S3FilesAccessPointPosixUser[] PosixUser = null,
    string Region = null,
    IResolvable|S3FilesAccessPointRootDirectory[] RootDirectory = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    S3FilesAccessPointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser">PosixUser</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]</code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory">RootDirectory</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]</code> | root_directory block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser"></a>

```csharp
public IResolvable|S3FilesAccessPointPosixUser[] PosixUser { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#region S3FilesAccessPoint#region}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectory[] RootDirectory { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.timeouts"></a>

```csharp
public S3FilesAccessPointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#timeouts S3FilesAccessPoint#timeouts}

---

### S3FilesAccessPointPosixUser <a name="S3FilesAccessPointPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointPosixUser {
    double Gid,
    double Uid,
    double[] SecondaryGids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid">Gid</a></code> | <code>double</code> | POSIX group ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid">Uid</a></code> | <code>double</code> | POSIX user ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | Secondary POSIX group IDs. |

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid"></a>

```csharp
public double Gid { get; set; }
```

- *Type:* double

POSIX group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid"></a>

```csharp
public double Uid { get; set; }
```

- *Type:* double

POSIX user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; set; }
```

- *Type:* double[]

Secondary POSIX group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}

---

### S3FilesAccessPointRootDirectory <a name="S3FilesAccessPointRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointRootDirectory {
    IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions[] CreationPermissions = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions">CreationPermissions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | creation_permissions block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path">Path</a></code> | <code>string</code> | Root directory path. |

---

##### `CreationPermissions`<sup>Optional</sup> <a name="CreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions[] CreationPermissions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

creation_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Root directory path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}

---

### S3FilesAccessPointRootDirectoryCreationPermissions <a name="S3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointRootDirectoryCreationPermissions {
    double OwnerGid,
    double OwnerUid,
    string Permissions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid">OwnerGid</a></code> | <code>double</code> | Owner group ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid">OwnerUid</a></code> | <code>double</code> | Owner user ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions">Permissions</a></code> | <code>string</code> | POSIX permissions. |

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid"></a>

```csharp
public double OwnerGid { get; set; }
```

- *Type:* double

Owner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid"></a>

```csharp
public double OwnerUid { get; set; }
```

- *Type:* double

Owner user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

POSIX permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}

---

### S3FilesAccessPointTimeouts <a name="S3FilesAccessPointTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#create S3FilesAccessPoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_access_point#delete S3FilesAccessPoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesAccessPointPosixUserList <a name="S3FilesAccessPointPosixUserList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointPosixUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get"></a>

```csharp
private S3FilesAccessPointPosixUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointPosixUser[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

---


### S3FilesAccessPointPosixUserOutputReference <a name="S3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointPosixUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids">ResetSecondaryGids</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```csharp
private void ResetSecondaryGids()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput">GidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput">UidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid">Gid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid">Uid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput"></a>

```csharp
public double GidInput { get; }
```

- *Type:* double

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```csharp
public double[] SecondaryGidsInput { get; }
```

- *Type:* double[]

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput"></a>

```csharp
public double UidInput { get; }
```

- *Type:* double

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```csharp
public double Gid { get; }
```

- *Type:* double

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; }
```

- *Type:* double[]

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```csharp
public double Uid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointPosixUser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---


### S3FilesAccessPointRootDirectoryCreationPermissionsList <a name="S3FilesAccessPointRootDirectoryCreationPermissionsList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointRootDirectoryCreationPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get"></a>

```csharp
private S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---


### S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput">OwnerGidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput">OwnerUidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">OwnerGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">OwnerUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OwnerGidInput`<sup>Optional</sup> <a name="OwnerGidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput"></a>

```csharp
public double OwnerGidInput { get; }
```

- *Type:* double

---

##### `OwnerUidInput`<sup>Optional</sup> <a name="OwnerUidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput"></a>

```csharp
public double OwnerUidInput { get; }
```

- *Type:* double

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```csharp
public double OwnerGid { get; }
```

- *Type:* double

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```csharp
public double OwnerUid { get; }
```

- *Type:* double

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### S3FilesAccessPointRootDirectoryList <a name="S3FilesAccessPointRootDirectoryList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointRootDirectoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get"></a>

```csharp
private S3FilesAccessPointRootDirectoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectory[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

---


### S3FilesAccessPointRootDirectoryOutputReference <a name="S3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointRootDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">PutCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">ResetCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreationPermissions` <a name="PutCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```csharp
private void PutCreationPermissions(IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---

##### `ResetCreationPermissions` <a name="ResetCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```csharp
private void ResetCreationPermissions()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">CreationPermissions</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList">S3FilesAccessPointRootDirectoryCreationPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">CreationPermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationPermissions`<sup>Required</sup> <a name="CreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```csharp
public S3FilesAccessPointRootDirectoryCreationPermissionsList CreationPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList">S3FilesAccessPointRootDirectoryCreationPermissionsList</a>

---

##### `CreationPermissionsInput`<sup>Optional</sup> <a name="CreationPermissionsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectoryCreationPermissions[] CreationPermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointRootDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---


### S3FilesAccessPointTimeoutsOutputReference <a name="S3FilesAccessPointTimeoutsOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesAccessPointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesAccessPointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---



