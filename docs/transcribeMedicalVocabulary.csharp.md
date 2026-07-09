# `transcribeMedicalVocabulary` Submodule <a name="`transcribeMedicalVocabulary` Submodule" id="@cdktn/provider-aws.transcribeMedicalVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeMedicalVocabulary <a name="TranscribeMedicalVocabulary" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary aws_transcribe_medical_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TranscribeMedicalVocabulary(Construct Scope, string Id, TranscribeMedicalVocabularyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig">TranscribeMedicalVocabularyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig">TranscribeMedicalVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTimeouts"></a>

```csharp
private void PutTimeouts(TranscribeMedicalVocabularyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeMedicalVocabulary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeMedicalVocabulary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeMedicalVocabulary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

TranscribeMedicalVocabulary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscribeMedicalVocabulary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscribeMedicalVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeMedicalVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.downloadUri">DownloadUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference">TranscribeMedicalVocabularyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput">VocabularyFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput">VocabularyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri">VocabularyFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName">VocabularyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DownloadUri`<sup>Required</sup> <a name="DownloadUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.downloadUri"></a>

```csharp
public string DownloadUri { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeouts"></a>

```csharp
public TranscribeMedicalVocabularyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference">TranscribeMedicalVocabularyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeoutsInput"></a>

```csharp
public IResolvable|TranscribeMedicalVocabularyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

---

##### `VocabularyFileUriInput`<sup>Optional</sup> <a name="VocabularyFileUriInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput"></a>

```csharp
public string VocabularyFileUriInput { get; }
```

- *Type:* string

---

##### `VocabularyNameInput`<sup>Optional</sup> <a name="VocabularyNameInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput"></a>

```csharp
public string VocabularyNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VocabularyFileUri`<sup>Required</sup> <a name="VocabularyFileUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri"></a>

```csharp
public string VocabularyFileUri { get; }
```

- *Type:* string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName"></a>

```csharp
public string VocabularyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeMedicalVocabularyConfig <a name="TranscribeMedicalVocabularyConfig" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TranscribeMedicalVocabularyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LanguageCode,
    string VocabularyFileUri,
    string VocabularyName,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    TranscribeMedicalVocabularyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri">VocabularyFileUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName">VocabularyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}.

---

##### `VocabularyFileUri`<sup>Required</sup> <a name="VocabularyFileUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri"></a>

```csharp
public string VocabularyFileUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}.

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName"></a>

```csharp
public string VocabularyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#region TranscribeMedicalVocabulary#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.timeouts"></a>

```csharp
public TranscribeMedicalVocabularyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#timeouts TranscribeMedicalVocabulary#timeouts}

---

### TranscribeMedicalVocabularyTimeouts <a name="TranscribeMedicalVocabularyTimeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TranscribeMedicalVocabularyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#create TranscribeMedicalVocabulary#create}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#delete TranscribeMedicalVocabulary#delete}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#update TranscribeMedicalVocabulary#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#create TranscribeMedicalVocabulary#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#delete TranscribeMedicalVocabulary#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/transcribe_medical_vocabulary#update TranscribeMedicalVocabulary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeMedicalVocabularyTimeoutsOutputReference <a name="TranscribeMedicalVocabularyTimeoutsOutputReference" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new TranscribeMedicalVocabularyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TranscribeMedicalVocabularyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

---



