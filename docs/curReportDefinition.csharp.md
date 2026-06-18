# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktn/provider-aws.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition aws_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CurReportDefinition(Construct Scope, string Id, CurReportDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">ResetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports">ResetRefreshClosedReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning">ResetReportVersioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalArtifacts` <a name="ResetAdditionalArtifacts" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```csharp
private void ResetAdditionalArtifacts()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRefreshClosedReports` <a name="ResetRefreshClosedReports" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports"></a>

```csharp
private void ResetRefreshClosedReports()
```

##### `ResetReportVersioning` <a name="ResetReportVersioning" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning"></a>

```csharp
private void ResetReportVersioning()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CurReportDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CurReportDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CurReportDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CurReportDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CurReportDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CurReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CurReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">AdditionalArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">AdditionalSchemaElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">RefreshClosedReportsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput">ReportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput">ReportVersioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput">S3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput">S3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportName">ReportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning">ReportVersioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region">S3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AdditionalArtifactsInput`<sup>Optional</sup> <a name="AdditionalArtifactsInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```csharp
public string[] AdditionalArtifactsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalSchemaElementsInput`<sup>Optional</sup> <a name="AdditionalSchemaElementsInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```csharp
public string[] AdditionalSchemaElementsInput { get; }
```

- *Type:* string[]

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RefreshClosedReportsInput`<sup>Optional</sup> <a name="RefreshClosedReportsInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```csharp
public bool|IResolvable RefreshClosedReportsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```csharp
public string ReportNameInput { get; }
```

- *Type:* string

---

##### `ReportVersioningInput`<sup>Optional</sup> <a name="ReportVersioningInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```csharp
public string ReportVersioningInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```csharp
public string S3PrefixInput { get; }
```

- *Type:* string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```csharp
public string S3RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `AdditionalArtifacts`<sup>Required</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```csharp
public string[] AdditionalArtifacts { get; }
```

- *Type:* string[]

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```csharp
public string[] AdditionalSchemaElements { get; }
```

- *Type:* string[]

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RefreshClosedReports`<sup>Required</sup> <a name="RefreshClosedReports" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```csharp
public bool|IResolvable RefreshClosedReports { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportName"></a>

```csharp
public string ReportName { get; }
```

- *Type:* string

---

##### `ReportVersioning`<sup>Required</sup> <a name="ReportVersioning" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```csharp
public string ReportVersioning { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```csharp
public string S3Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CurReportDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AdditionalSchemaElements,
    string Compression,
    string Format,
    string ReportName,
    string S3Bucket,
    string S3Prefix,
    string S3Region,
    string TimeUnit,
    string[] AdditionalArtifacts = null,
    string Id = null,
    bool|IResolvable RefreshClosedReports = null,
    string ReportVersioning = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression">Compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName">ReportName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region">S3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">TimeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">ReportVersioning</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}. |
| <code><a href="#@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#tags_all CurReportDefinition#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```csharp
public string[] AdditionalSchemaElements { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#format CurReportDefinition#format}.

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```csharp
public string ReportName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```csharp
public string S3Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `AdditionalArtifacts`<sup>Optional</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```csharp
public string[] AdditionalArtifacts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshClosedReports`<sup>Optional</sup> <a name="RefreshClosedReports" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```csharp
public bool|IResolvable RefreshClosedReports { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `ReportVersioning`<sup>Optional</sup> <a name="ReportVersioning" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```csharp
public string ReportVersioning { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cur_report_definition#tags_all CurReportDefinition#tags_all}.

---



