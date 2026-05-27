# `auditmanagerAssessmentReport` Submodule <a name="`auditmanagerAssessmentReport` Submodule" id="@cdktn/provider-aws.auditmanagerAssessmentReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentReport <a name="AuditmanagerAssessmentReport" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report aws_auditmanager_assessment_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerAssessmentReport(Construct Scope, string Id, AuditmanagerAssessmentReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig">AuditmanagerAssessmentReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig">AuditmanagerAssessmentReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentReport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentReport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuditmanagerAssessmentReport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAssessmentReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAssessmentReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.author">Author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentIdInput">AssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.author"></a>

```csharp
public string Author { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AssessmentIdInput`<sup>Optional</sup> <a name="AssessmentIdInput" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentIdInput"></a>

```csharp
public string AssessmentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentReportConfig <a name="AuditmanagerAssessmentReportConfig" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerAssessmentReportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssessmentId,
    string Name,
    string Description = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.assessmentId">AssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.assessmentId"></a>

```csharp
public string AssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_report#region AuditmanagerAssessmentReport#region}

---



