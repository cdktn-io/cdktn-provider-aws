# `sagemakerImageVersion` Submodule <a name="`sagemakerImageVersion` Submodule" id="@cdktn/provider-aws.sagemakerImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerImageVersion <a name="SagemakerImageVersion" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerImageVersion(Construct Scope, string Id, SagemakerImageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetHorovod">ResetHorovod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetJobType">ResetJobType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework">ResetMlFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProcessor">ResetProcessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang">ResetProgrammingLang</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes">ResetReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance">ResetVendorGuidance</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetHorovod` <a name="ResetHorovod" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetHorovod"></a>

```csharp
private void ResetHorovod()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobType` <a name="ResetJobType" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetJobType"></a>

```csharp
private void ResetJobType()
```

##### `ResetMlFramework` <a name="ResetMlFramework" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework"></a>

```csharp
private void ResetMlFramework()
```

##### `ResetProcessor` <a name="ResetProcessor" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProcessor"></a>

```csharp
private void ResetProcessor()
```

##### `ResetProgrammingLang` <a name="ResetProgrammingLang" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang"></a>

```csharp
private void ResetProgrammingLang()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReleaseNotes` <a name="ResetReleaseNotes" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes"></a>

```csharp
private void ResetReleaseNotes()
```

##### `ResetVendorGuidance` <a name="ResetVendorGuidance" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance"></a>

```csharp
private void ResetVendorGuidance()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerImageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerImageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerImageVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerImageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerImageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.containerImage">ContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput">AliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput">BaseImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput">HorovodInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput">JobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput">MlFrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processorInput">ProcessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput">ProgrammingLangInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput">ReleaseNotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput">VendorGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImage">BaseImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovod">Horovod</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobType">JobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework">MlFramework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processor">Processor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang">ProgrammingLang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes">ReleaseNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance">VendorGuidance</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.containerImage"></a>

```csharp
public string ContainerImage { get; }
```

- *Type:* string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput"></a>

```csharp
public string[] AliasesInput { get; }
```

- *Type:* string[]

---

##### `BaseImageInput`<sup>Optional</sup> <a name="BaseImageInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput"></a>

```csharp
public string BaseImageInput { get; }
```

- *Type:* string

---

##### `HorovodInput`<sup>Optional</sup> <a name="HorovodInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput"></a>

```csharp
public bool|IResolvable HorovodInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput"></a>

```csharp
public string JobTypeInput { get; }
```

- *Type:* string

---

##### `MlFrameworkInput`<sup>Optional</sup> <a name="MlFrameworkInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput"></a>

```csharp
public string MlFrameworkInput { get; }
```

- *Type:* string

---

##### `ProcessorInput`<sup>Optional</sup> <a name="ProcessorInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processorInput"></a>

```csharp
public string ProcessorInput { get; }
```

- *Type:* string

---

##### `ProgrammingLangInput`<sup>Optional</sup> <a name="ProgrammingLangInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput"></a>

```csharp
public string ProgrammingLangInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReleaseNotesInput`<sup>Optional</sup> <a name="ReleaseNotesInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput"></a>

```csharp
public string ReleaseNotesInput { get; }
```

- *Type:* string

---

##### `VendorGuidanceInput`<sup>Optional</sup> <a name="VendorGuidanceInput" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput"></a>

```csharp
public string VendorGuidanceInput { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `BaseImage`<sup>Required</sup> <a name="BaseImage" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImage"></a>

```csharp
public string BaseImage { get; }
```

- *Type:* string

---

##### `Horovod`<sup>Required</sup> <a name="Horovod" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovod"></a>

```csharp
public bool|IResolvable Horovod { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobType"></a>

```csharp
public string JobType { get; }
```

- *Type:* string

---

##### `MlFramework`<sup>Required</sup> <a name="MlFramework" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework"></a>

```csharp
public string MlFramework { get; }
```

- *Type:* string

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processor"></a>

```csharp
public string Processor { get; }
```

- *Type:* string

---

##### `ProgrammingLang`<sup>Required</sup> <a name="ProgrammingLang" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang"></a>

```csharp
public string ProgrammingLang { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReleaseNotes`<sup>Required</sup> <a name="ReleaseNotes" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes"></a>

```csharp
public string ReleaseNotes { get; }
```

- *Type:* string

---

##### `VendorGuidance`<sup>Required</sup> <a name="VendorGuidance" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance"></a>

```csharp
public string VendorGuidance { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerImageVersionConfig <a name="SagemakerImageVersionConfig" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerImageVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BaseImage,
    string ImageName,
    string[] Aliases = null,
    bool|IResolvable Horovod = null,
    string Id = null,
    string JobType = null,
    string MlFramework = null,
    string Processor = null,
    string ProgrammingLang = null,
    string Region = null,
    string ReleaseNotes = null,
    string VendorGuidance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage">BaseImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases">Aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod">Horovod</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType">JobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework">MlFramework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor">Processor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang">ProgrammingLang</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes">ReleaseNotes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}. |
| <code><a href="#@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance">VendorGuidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseImage`<sup>Required</sup> <a name="BaseImage" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage"></a>

```csharp
public string BaseImage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}.

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases"></a>

```csharp
public string[] Aliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}.

---

##### `Horovod`<sup>Optional</sup> <a name="Horovod" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod"></a>

```csharp
public bool|IResolvable Horovod { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobType`<sup>Optional</sup> <a name="JobType" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType"></a>

```csharp
public string JobType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}.

---

##### `MlFramework`<sup>Optional</sup> <a name="MlFramework" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework"></a>

```csharp
public string MlFramework { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}.

---

##### `Processor`<sup>Optional</sup> <a name="Processor" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor"></a>

```csharp
public string Processor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}.

---

##### `ProgrammingLang`<sup>Optional</sup> <a name="ProgrammingLang" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang"></a>

```csharp
public string ProgrammingLang { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#region SagemakerImageVersion#region}

---

##### `ReleaseNotes`<sup>Optional</sup> <a name="ReleaseNotes" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes"></a>

```csharp
public string ReleaseNotes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}.

---

##### `VendorGuidance`<sup>Optional</sup> <a name="VendorGuidance" id="@cdktn/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance"></a>

```csharp
public string VendorGuidance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}.

---



