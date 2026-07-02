# `s3AccountPublicAccessBlock` Submodule <a name="`s3AccountPublicAccessBlock` Submodule" id="@cdktn/provider-aws.s3AccountPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccountPublicAccessBlock <a name="S3AccountPublicAccessBlock" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block aws_s3_account_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3AccountPublicAccessBlock(Construct Scope, string Id, S3AccountPublicAccessBlockConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig">S3AccountPublicAccessBlockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig">S3AccountPublicAccessBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicAcls"></a>

```csharp
private void ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicPolicy"></a>

```csharp
private void ResetBlockPublicPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetIgnorePublicAcls"></a>

```csharp
private void ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetRestrictPublicBuckets"></a>

```csharp
private void ResetRestrictPublicBuckets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3AccountPublicAccessBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3AccountPublicAccessBlock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3AccountPublicAccessBlock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3AccountPublicAccessBlock.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3AccountPublicAccessBlock.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3AccountPublicAccessBlock resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3AccountPublicAccessBlock to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3AccountPublicAccessBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3AccountPublicAccessBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAclsInput"></a>

```csharp
public bool|IResolvable BlockPublicAclsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicyInput"></a>

```csharp
public bool|IResolvable BlockPublicPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAclsInput"></a>

```csharp
public bool|IResolvable IgnorePublicAclsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```csharp
public bool|IResolvable RestrictPublicBucketsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAcls"></a>

```csharp
public bool|IResolvable BlockPublicAcls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicy"></a>

```csharp
public bool|IResolvable BlockPublicPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAcls"></a>

```csharp
public bool|IResolvable IgnorePublicAcls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBuckets"></a>

```csharp
public bool|IResolvable RestrictPublicBuckets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccountPublicAccessBlockConfig <a name="S3AccountPublicAccessBlockConfig" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3AccountPublicAccessBlockConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    bool|IResolvable BlockPublicAcls = null,
    bool|IResolvable BlockPublicPolicy = null,
    string Id = null,
    bool|IResolvable IgnorePublicAcls = null,
    bool|IResolvable RestrictPublicBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#account_id S3AccountPublicAccessBlock#account_id}. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#block_public_acls S3AccountPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#block_public_policy S3AccountPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#id S3AccountPublicAccessBlock#id}. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#account_id S3AccountPublicAccessBlock#account_id}.

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicAcls"></a>

```csharp
public bool|IResolvable BlockPublicAcls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#block_public_acls S3AccountPublicAccessBlock#block_public_acls}.

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```csharp
public bool|IResolvable BlockPublicPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#block_public_policy S3AccountPublicAccessBlock#block_public_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#id S3AccountPublicAccessBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```csharp
public bool|IResolvable IgnorePublicAcls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}.

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```csharp
public bool|IResolvable RestrictPublicBuckets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3_account_public_access_block#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}.

---



