# `transcribeVocabularyFilter` Submodule <a name="`transcribeVocabularyFilter` Submodule" id="@cdktn/provider-aws.transcribeVocabularyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabularyFilter <a name="TranscribeVocabularyFilter" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TranscribeVocabularyFilter(Construct Scope, string Id, TranscribeVocabularyFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri">ResetVocabularyFilterFileUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords">ResetWords</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVocabularyFilterFileUri` <a name="ResetVocabularyFilterFileUri" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri"></a>

```csharp
private void ResetVocabularyFilterFileUri()
```

##### `ResetWords` <a name="ResetWords" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords"></a>

```csharp
private void ResetWords()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeVocabularyFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeVocabularyFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeVocabularyFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeVocabularyFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeVocabularyFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TranscribeVocabularyFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscribeVocabularyFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscribeVocabularyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeVocabularyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri">DownloadUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput">VocabularyFilterFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput">VocabularyFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput">WordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri">VocabularyFilterFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words">Words</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DownloadUri`<sup>Required</sup> <a name="DownloadUri" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.downloadUri"></a>

```csharp
public string DownloadUri { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VocabularyFilterFileUriInput`<sup>Optional</sup> <a name="VocabularyFilterFileUriInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput"></a>

```csharp
public string VocabularyFilterFileUriInput { get; }
```

- *Type:* string

---

##### `VocabularyFilterNameInput`<sup>Optional</sup> <a name="VocabularyFilterNameInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput"></a>

```csharp
public string VocabularyFilterNameInput { get; }
```

- *Type:* string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput"></a>

```csharp
public string[] WordsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VocabularyFilterFileUri`<sup>Required</sup> <a name="VocabularyFilterFileUri" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri"></a>

```csharp
public string VocabularyFilterFileUri { get; }
```

- *Type:* string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName"></a>

```csharp
public string VocabularyFilterName { get; }
```

- *Type:* string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words"></a>

```csharp
public string[] Words { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyFilterConfig <a name="TranscribeVocabularyFilterConfig" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TranscribeVocabularyFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LanguageCode,
    string VocabularyFilterName,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string VocabularyFilterFileUri = null,
    string[] Words = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri">VocabularyFilterFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words">Words</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}.

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName"></a>

```csharp
public string VocabularyFilterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#region TranscribeVocabularyFilter#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}.

---

##### `VocabularyFilterFileUri`<sup>Optional</sup> <a name="VocabularyFilterFileUri" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri"></a>

```csharp
public string VocabularyFilterFileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}.

---

##### `Words`<sup>Optional</sup> <a name="Words" id="@cdktn/provider-aws.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words"></a>

```csharp
public string[] Words { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}.

---



