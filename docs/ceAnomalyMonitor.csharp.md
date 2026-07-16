# `ceAnomalyMonitor` Submodule <a name="`ceAnomalyMonitor` Submodule" id="@cdktn/provider-aws.ceAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalyMonitor <a name="CeAnomalyMonitor" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor aws_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CeAnomalyMonitor(Construct Scope, string Id, CeAnomalyMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension">ResetMonitorDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification">ResetMonitorSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonitorDimension` <a name="ResetMonitorDimension" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension"></a>

```csharp
private void ResetMonitorDimension()
```

##### `ResetMonitorSpecification` <a name="ResetMonitorSpecification" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification"></a>

```csharp
private void ResetMonitorSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CeAnomalyMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CeAnomalyMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CeAnomalyMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CeAnomalyMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CeAnomalyMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CeAnomalyMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CeAnomalyMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CeAnomalyMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CeAnomalyMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput">MonitorDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput">MonitorSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput">MonitorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension">MonitorDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification">MonitorSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonitorDimensionInput`<sup>Optional</sup> <a name="MonitorDimensionInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput"></a>

```csharp
public string MonitorDimensionInput { get; }
```

- *Type:* string

---

##### `MonitorSpecificationInput`<sup>Optional</sup> <a name="MonitorSpecificationInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput"></a>

```csharp
public string MonitorSpecificationInput { get; }
```

- *Type:* string

---

##### `MonitorTypeInput`<sup>Optional</sup> <a name="MonitorTypeInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput"></a>

```csharp
public string MonitorTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonitorDimension`<sup>Required</sup> <a name="MonitorDimension" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension"></a>

```csharp
public string MonitorDimension { get; }
```

- *Type:* string

---

##### `MonitorSpecification`<sup>Required</sup> <a name="MonitorSpecification" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification"></a>

```csharp
public string MonitorSpecification { get; }
```

- *Type:* string

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalyMonitorConfig <a name="CeAnomalyMonitorConfig" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CeAnomalyMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MonitorType,
    string Name,
    string Id = null,
    string MonitorDimension = null,
    string MonitorSpecification = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType">MonitorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#name CeAnomalyMonitor#name}. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#id CeAnomalyMonitor#id}. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension">MonitorDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification">MonitorSpecification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}. |
| <code><a href="#@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType"></a>

```csharp
public string MonitorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#name CeAnomalyMonitor#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#id CeAnomalyMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitorDimension`<sup>Optional</sup> <a name="MonitorDimension" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension"></a>

```csharp
public string MonitorDimension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}.

---

##### `MonitorSpecification`<sup>Optional</sup> <a name="MonitorSpecification" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification"></a>

```csharp
public string MonitorSpecification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}.

---



