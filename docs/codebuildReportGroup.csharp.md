# `codebuildReportGroup` Submodule <a name="`codebuildReportGroup` Submodule" id="@cdktn/provider-aws.codebuildReportGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildReportGroup <a name="CodebuildReportGroup" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group aws_codebuild_report_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodebuildReportGroup(Construct Scope, string Id, CodebuildReportGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig">CodebuildReportGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig">CodebuildReportGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig">PutExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports">ResetDeleteReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExportConfig` <a name="PutExportConfig" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig"></a>

```csharp
private void PutExportConfig(CodebuildReportGroupExportConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `ResetDeleteReports` <a name="ResetDeleteReports" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports"></a>

```csharp
private void ResetDeleteReports()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodebuildReportGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodebuildReportGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodebuildReportGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodebuildReportGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodebuildReportGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodebuildReportGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildReportGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildReportGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodebuildReportGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfig">ExportConfig</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput">DeleteReportsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput">ExportConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReports">DeleteReports</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `ExportConfig`<sup>Required</sup> <a name="ExportConfig" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfig"></a>

```csharp
public CodebuildReportGroupExportConfigOutputReference ExportConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a>

---

##### `DeleteReportsInput`<sup>Optional</sup> <a name="DeleteReportsInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput"></a>

```csharp
public bool|IResolvable DeleteReportsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportConfigInput`<sup>Optional</sup> <a name="ExportConfigInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput"></a>

```csharp
public CodebuildReportGroupExportConfig ExportConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DeleteReports`<sup>Required</sup> <a name="DeleteReports" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReports"></a>

```csharp
public bool|IResolvable DeleteReports { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildReportGroupConfig <a name="CodebuildReportGroupConfig" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodebuildReportGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CodebuildReportGroupExportConfig ExportConfig,
    string Name,
    string Type,
    bool|IResolvable DeleteReports = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig">ExportConfig</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | export_config block. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#name CodebuildReportGroup#name}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports">DeleteReports</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#id CodebuildReportGroup#id}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#tags CodebuildReportGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExportConfig`<sup>Required</sup> <a name="ExportConfig" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig"></a>

```csharp
public CodebuildReportGroupExportConfig ExportConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#export_config CodebuildReportGroup#export_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#name CodebuildReportGroup#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `DeleteReports`<sup>Optional</sup> <a name="DeleteReports" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports"></a>

```csharp
public bool|IResolvable DeleteReports { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#id CodebuildReportGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#region CodebuildReportGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#tags CodebuildReportGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}.

---

### CodebuildReportGroupExportConfig <a name="CodebuildReportGroupExportConfig" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodebuildReportGroupExportConfig {
    string Type,
    CodebuildReportGroupExportConfigS3Destination S3Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | s3_destination block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination"></a>

```csharp
public CodebuildReportGroupExportConfigS3Destination S3Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}

---

### CodebuildReportGroupExportConfigS3Destination <a name="CodebuildReportGroupExportConfigS3Destination" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodebuildReportGroupExportConfigS3Destination {
    string Bucket,
    string EncryptionKey,
    bool|IResolvable EncryptionDisabled = null,
    string Packaging = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#bucket CodebuildReportGroup#bucket}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging">Packaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#packaging CodebuildReportGroup#packaging}. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#path CodebuildReportGroup#path}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#bucket CodebuildReportGroup#bucket}.

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}.

---

##### `EncryptionDisabled`<sup>Optional</sup> <a name="EncryptionDisabled" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled"></a>

```csharp
public bool|IResolvable EncryptionDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}.

---

##### `Packaging`<sup>Optional</sup> <a name="Packaging" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging"></a>

```csharp
public string Packaging { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#packaging CodebuildReportGroup#packaging}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/codebuild_report_group#path CodebuildReportGroup#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildReportGroupExportConfigOutputReference <a name="CodebuildReportGroupExportConfigOutputReference" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodebuildReportGroupExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination"></a>

```csharp
private void PutS3Destination(CodebuildReportGroupExportConfigS3Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination"></a>

```csharp
private void ResetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination"></a>

```csharp
public CodebuildReportGroupExportConfigS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput"></a>

```csharp
public CodebuildReportGroupExportConfigS3Destination S3DestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue"></a>

```csharp
public CodebuildReportGroupExportConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---


### CodebuildReportGroupExportConfigS3DestinationOutputReference <a name="CodebuildReportGroupExportConfigS3DestinationOutputReference" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodebuildReportGroupExportConfigS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled">ResetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging">ResetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionDisabled` <a name="ResetEncryptionDisabled" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled"></a>

```csharp
private void ResetEncryptionDisabled()
```

##### `ResetPackaging` <a name="ResetPackaging" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging"></a>

```csharp
private void ResetPackaging()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput">EncryptionDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput">PackagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled">EncryptionDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging">Packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EncryptionDisabledInput`<sup>Optional</sup> <a name="EncryptionDisabledInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput"></a>

```csharp
public bool|IResolvable EncryptionDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `PackagingInput`<sup>Optional</sup> <a name="PackagingInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput"></a>

```csharp
public string PackagingInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `EncryptionDisabled`<sup>Required</sup> <a name="EncryptionDisabled" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled"></a>

```csharp
public bool|IResolvable EncryptionDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `Packaging`<sup>Required</sup> <a name="Packaging" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging"></a>

```csharp
public string Packaging { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue"></a>

```csharp
public CodebuildReportGroupExportConfigS3Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---



