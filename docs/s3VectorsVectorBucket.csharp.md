# `s3VectorsVectorBucket` Submodule <a name="`s3VectorsVectorBucket` Submodule" id="@cdktn/provider-aws.s3VectorsVectorBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsVectorBucket <a name="S3VectorsVectorBucket" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket aws_s3vectors_vector_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3VectorsVectorBucket(Construct Scope, string Id, S3VectorsVectorBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig">S3VectorsVectorBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig">S3VectorsVectorBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(IResolvable|S3VectorsVectorBucketEncryptionConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.putEncryptionConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3VectorsVectorBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3VectorsVectorBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3VectorsVectorBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3VectorsVectorBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3VectorsVectorBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3VectorsVectorBucket resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3VectorsVectorBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3VectorsVectorBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3VectorsVectorBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList">S3VectorsVectorBucketEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketArn">VectorBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketNameInput">VectorBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketName">VectorBucketName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfiguration"></a>

```csharp
public S3VectorsVectorBucketEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList">S3VectorsVectorBucketEncryptionConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `VectorBucketArn`<sup>Required</sup> <a name="VectorBucketArn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketArn"></a>

```csharp
public string VectorBucketArn { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|S3VectorsVectorBucketEncryptionConfiguration[] EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VectorBucketNameInput`<sup>Optional</sup> <a name="VectorBucketNameInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketNameInput"></a>

```csharp
public string VectorBucketNameInput { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VectorBucketName`<sup>Required</sup> <a name="VectorBucketName" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketName"></a>

```csharp
public string VectorBucketName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsVectorBucketConfig <a name="S3VectorsVectorBucketConfig" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3VectorsVectorBucketConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VectorBucketName,
    IResolvable|S3VectorsVectorBucketEncryptionConfiguration[] EncryptionConfiguration = null,
    bool|IResolvable ForceDestroy = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.vectorBucketName">VectorBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#force_destroy S3VectorsVectorBucket#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VectorBucketName`<sup>Required</sup> <a name="VectorBucketName" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.vectorBucketName"></a>

```csharp
public string VectorBucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.encryptionConfiguration"></a>

```csharp
public IResolvable|S3VectorsVectorBucketEncryptionConfiguration[] EncryptionConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#force_destroy S3VectorsVectorBucket#force_destroy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#region S3VectorsVectorBucket#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}.

---

### S3VectorsVectorBucketEncryptionConfiguration <a name="S3VectorsVectorBucketEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3VectorsVectorBucketEncryptionConfiguration {
    string KmsKeyArn = null,
    string SseType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#kms_key_arn S3VectorsVectorBucket#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.sseType">SseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#sse_type S3VectorsVectorBucket#sse_type}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#kms_key_arn S3VectorsVectorBucket#kms_key_arn}.

---

##### `SseType`<sup>Optional</sup> <a name="SseType" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.sseType"></a>

```csharp
public string SseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket#sse_type S3VectorsVectorBucket#sse_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3VectorsVectorBucketEncryptionConfigurationList <a name="S3VectorsVectorBucketEncryptionConfigurationList" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3VectorsVectorBucketEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.get"></a>

```csharp
private S3VectorsVectorBucketEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|S3VectorsVectorBucketEncryptionConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>[]

---


### S3VectorsVectorBucketEncryptionConfigurationOutputReference <a name="S3VectorsVectorBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3VectorsVectorBucketEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetSseType">ResetSseType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSseType` <a name="ResetSseType" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetSseType"></a>

```csharp
private void ResetSseType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseTypeInput">SseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseType">SseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SseTypeInput`<sup>Optional</sup> <a name="SseTypeInput" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseTypeInput"></a>

```csharp
public string SseTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SseType`<sup>Required</sup> <a name="SseType" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseType"></a>

```csharp
public string SseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3VectorsVectorBucketEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>

---



