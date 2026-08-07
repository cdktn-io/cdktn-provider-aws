# `s3ControlDirectoryBucketAccessPointScope` Submodule <a name="`s3ControlDirectoryBucketAccessPointScope` Submodule" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlDirectoryBucketAccessPointScope <a name="S3ControlDirectoryBucketAccessPointScope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope aws_s3control_directory_bucket_access_point_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ControlDirectoryBucketAccessPointScope(Construct Scope, string Id, S3ControlDirectoryBucketAccessPointScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig">S3ControlDirectoryBucketAccessPointScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig">S3ControlDirectoryBucketAccessPointScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope"></a>

```csharp
private void PutScope(IResolvable|S3ControlDirectoryBucketAccessPointScopeScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.putScope.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3ControlDirectoryBucketAccessPointScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3ControlDirectoryBucketAccessPointScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3ControlDirectoryBucketAccessPointScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3ControlDirectoryBucketAccessPointScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ControlDirectoryBucketAccessPointScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ControlDirectoryBucketAccessPointScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3ControlDirectoryBucketAccessPointScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList">S3ControlDirectoryBucketAccessPointScopeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scopeInput">ScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scope"></a>

```csharp
public S3ControlDirectoryBucketAccessPointScopeScopeList Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList">S3ControlDirectoryBucketAccessPointScopeScopeList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.scopeInput"></a>

```csharp
public IResolvable|S3ControlDirectoryBucketAccessPointScopeScope[] ScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlDirectoryBucketAccessPointScopeConfig <a name="S3ControlDirectoryBucketAccessPointScopeConfig" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ControlDirectoryBucketAccessPointScopeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    string Region = null,
    IResolvable|S3ControlDirectoryBucketAccessPointScopeScope[] Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.scope">Scope</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]</code> | scope block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#region S3ControlDirectoryBucketAccessPointScope#region}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeConfig.property.scope"></a>

```csharp
public IResolvable|S3ControlDirectoryBucketAccessPointScopeScope[] Scope { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#scope S3ControlDirectoryBucketAccessPointScope#scope}

---

### S3ControlDirectoryBucketAccessPointScopeScope <a name="S3ControlDirectoryBucketAccessPointScopeScope" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ControlDirectoryBucketAccessPointScopeScope {
    string[] Permissions = null,
    string[] Prefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.permissions">Permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.prefixes">Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}.

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope.property.prefixes"></a>

```csharp
public string[] Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlDirectoryBucketAccessPointScopeScopeList <a name="S3ControlDirectoryBucketAccessPointScopeScopeList" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ControlDirectoryBucketAccessPointScopeScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get"></a>

```csharp
private S3ControlDirectoryBucketAccessPointScopeScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeList.property.internalValue"></a>

```csharp
public IResolvable|S3ControlDirectoryBucketAccessPointScopeScope[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>[]

---


### S3ControlDirectoryBucketAccessPointScopeScopeOutputReference <a name="S3ControlDirectoryBucketAccessPointScopeScopeOutputReference" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3ControlDirectoryBucketAccessPointScopeScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.resetPrefixes"></a>

```csharp
private void ResetPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixes">Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixesInput"></a>

```csharp
public string[] PrefixesInput { get; }
```

- *Type:* string[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.prefixes"></a>

```csharp
public string[] Prefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3ControlDirectoryBucketAccessPointScopeScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3ControlDirectoryBucketAccessPointScope.S3ControlDirectoryBucketAccessPointScopeScope">S3ControlDirectoryBucketAccessPointScopeScope</a>

---



