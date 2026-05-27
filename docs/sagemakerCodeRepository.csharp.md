# `sagemakerCodeRepository` Submodule <a name="`sagemakerCodeRepository` Submodule" id="@cdktn/provider-aws.sagemakerCodeRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerCodeRepository <a name="SagemakerCodeRepository" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository aws_sagemaker_code_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerCodeRepository(Construct Scope, string Id, SagemakerCodeRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig">SagemakerCodeRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig">SagemakerCodeRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig">PutGitConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGitConfig` <a name="PutGitConfig" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig"></a>

```csharp
private void PutGitConfig(SagemakerCodeRepositoryGitConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.putGitConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerCodeRepository resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerCodeRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerCodeRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerCodeRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerCodeRepository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerCodeRepository resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerCodeRepository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerCodeRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerCodeRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfig">GitConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference">SagemakerCodeRepositoryGitConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryNameInput">CodeRepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfigInput">GitConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryName">CodeRepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `GitConfig`<sup>Required</sup> <a name="GitConfig" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfig"></a>

```csharp
public SagemakerCodeRepositoryGitConfigOutputReference GitConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference">SagemakerCodeRepositoryGitConfigOutputReference</a>

---

##### `CodeRepositoryNameInput`<sup>Optional</sup> <a name="CodeRepositoryNameInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryNameInput"></a>

```csharp
public string CodeRepositoryNameInput { get; }
```

- *Type:* string

---

##### `GitConfigInput`<sup>Optional</sup> <a name="GitConfigInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.gitConfigInput"></a>

```csharp
public SagemakerCodeRepositoryGitConfig GitConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CodeRepositoryName`<sup>Required</sup> <a name="CodeRepositoryName" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.codeRepositoryName"></a>

```csharp
public string CodeRepositoryName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerCodeRepositoryConfig <a name="SagemakerCodeRepositoryConfig" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerCodeRepositoryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CodeRepositoryName,
    SagemakerCodeRepositoryGitConfig GitConfig,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.codeRepositoryName">CodeRepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#code_repository_name SagemakerCodeRepository#code_repository_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.gitConfig">GitConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | git_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#id SagemakerCodeRepository#id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#tags SagemakerCodeRepository#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#tags_all SagemakerCodeRepository#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CodeRepositoryName`<sup>Required</sup> <a name="CodeRepositoryName" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.codeRepositoryName"></a>

```csharp
public string CodeRepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#code_repository_name SagemakerCodeRepository#code_repository_name}.

---

##### `GitConfig`<sup>Required</sup> <a name="GitConfig" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.gitConfig"></a>

```csharp
public SagemakerCodeRepositoryGitConfig GitConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

git_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#git_config SagemakerCodeRepository#git_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#id SagemakerCodeRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#region SagemakerCodeRepository#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#tags SagemakerCodeRepository#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#tags_all SagemakerCodeRepository#tags_all}.

---

### SagemakerCodeRepositoryGitConfig <a name="SagemakerCodeRepositoryGitConfig" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerCodeRepositoryGitConfig {
    string RepositoryUrl,
    string Branch = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#repository_url SagemakerCodeRepository#repository_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#branch SagemakerCodeRepository#branch}. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#secret_arn SagemakerCodeRepository#secret_arn}. |

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#repository_url SagemakerCodeRepository#repository_url}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#branch SagemakerCodeRepository#branch}.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/sagemaker_code_repository#secret_arn SagemakerCodeRepository#secret_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerCodeRepositoryGitConfigOutputReference <a name="SagemakerCodeRepositoryGitConfigOutputReference" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerCodeRepositoryGitConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerCodeRepositoryGitConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerCodeRepository.SagemakerCodeRepositoryGitConfig">SagemakerCodeRepositoryGitConfig</a>

---



