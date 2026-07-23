# `codecatalystSourceRepository` Submodule <a name="`codecatalystSourceRepository` Submodule" id="@cdktn/provider-aws.codecatalystSourceRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecatalystSourceRepository <a name="CodecatalystSourceRepository" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository aws_codecatalyst_source_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodecatalystSourceRepository(Construct Scope, string Id, CodecatalystSourceRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig">CodecatalystSourceRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig">CodecatalystSourceRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.putTimeouts"></a>

```csharp
private void PutTimeouts(CodecatalystSourceRepositoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodecatalystSourceRepository resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodecatalystSourceRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodecatalystSourceRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodecatalystSourceRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodecatalystSourceRepository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodecatalystSourceRepository resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodecatalystSourceRepository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodecatalystSourceRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodecatalystSourceRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference">CodecatalystSourceRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.spaceNameInput">SpaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.spaceName">SpaceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.timeouts"></a>

```csharp
public CodecatalystSourceRepositoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference">CodecatalystSourceRepositoryTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SpaceNameInput`<sup>Optional</sup> <a name="SpaceNameInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.spaceNameInput"></a>

```csharp
public string SpaceNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.timeoutsInput"></a>

```csharp
public IResolvable|CodecatalystSourceRepositoryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.spaceName"></a>

```csharp
public string SpaceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecatalystSourceRepositoryConfig <a name="CodecatalystSourceRepositoryConfig" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodecatalystSourceRepositoryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ProjectName,
    string SpaceName,
    string Description = null,
    string Id = null,
    string Region = null,
    CodecatalystSourceRepositoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#name CodecatalystSourceRepository#name}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.projectName">ProjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#project_name CodecatalystSourceRepository#project_name}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.spaceName">SpaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#space_name CodecatalystSourceRepository#space_name}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#description CodecatalystSourceRepository#description}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#id CodecatalystSourceRepository#id}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#name CodecatalystSourceRepository#name}.

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#project_name CodecatalystSourceRepository#project_name}.

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.spaceName"></a>

```csharp
public string SpaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#space_name CodecatalystSourceRepository#space_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#description CodecatalystSourceRepository#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#id CodecatalystSourceRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#region CodecatalystSourceRepository#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryConfig.property.timeouts"></a>

```csharp
public CodecatalystSourceRepositoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#timeouts CodecatalystSourceRepository#timeouts}

---

### CodecatalystSourceRepositoryTimeouts <a name="CodecatalystSourceRepositoryTimeouts" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodecatalystSourceRepositoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#create CodecatalystSourceRepository#create}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#delete CodecatalystSourceRepository#delete}. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#update CodecatalystSourceRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#create CodecatalystSourceRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#delete CodecatalystSourceRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/codecatalyst_source_repository#update CodecatalystSourceRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodecatalystSourceRepositoryTimeoutsOutputReference <a name="CodecatalystSourceRepositoryTimeoutsOutputReference" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodecatalystSourceRepositoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodecatalystSourceRepositoryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codecatalystSourceRepository.CodecatalystSourceRepositoryTimeouts">CodecatalystSourceRepositoryTimeouts</a>

---



