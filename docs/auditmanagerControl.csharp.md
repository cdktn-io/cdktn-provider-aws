# `auditmanagerControl` Submodule <a name="`auditmanagerControl` Submodule" id="@cdktn/provider-aws.auditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerControl <a name="AuditmanagerControl" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControl(Construct Scope, string Id, AuditmanagerControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig">AuditmanagerControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig">AuditmanagerControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources">PutControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions">ResetActionPlanInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle">ResetActionPlanTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources">ResetControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation">ResetTestingInformation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutControlMappingSources` <a name="PutControlMappingSources" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources"></a>

```csharp
private void PutControlMappingSources(IResolvable|AuditmanagerControlControlMappingSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

---

##### `ResetActionPlanInstructions` <a name="ResetActionPlanInstructions" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions"></a>

```csharp
private void ResetActionPlanInstructions()
```

##### `ResetActionPlanTitle` <a name="ResetActionPlanTitle" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle"></a>

```csharp
private void ResetActionPlanTitle()
```

##### `ResetControlMappingSources` <a name="ResetControlMappingSources" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources"></a>

```csharp
private void ResetControlMappingSources()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTestingInformation` <a name="ResetTestingInformation" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation"></a>

```csharp
private void ResetTestingInformation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuditmanagerControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources">ControlMappingSources</a></code> | <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput">ActionPlanInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput">ActionPlanTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput">ControlMappingSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput">TestingInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions">ActionPlanInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle">ActionPlanTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation">TestingInformation</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ControlMappingSources`<sup>Required</sup> <a name="ControlMappingSources" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources"></a>

```csharp
public AuditmanagerControlControlMappingSourcesList ControlMappingSources { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ActionPlanInstructionsInput`<sup>Optional</sup> <a name="ActionPlanInstructionsInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput"></a>

```csharp
public string ActionPlanInstructionsInput { get; }
```

- *Type:* string

---

##### `ActionPlanTitleInput`<sup>Optional</sup> <a name="ActionPlanTitleInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput"></a>

```csharp
public string ActionPlanTitleInput { get; }
```

- *Type:* string

---

##### `ControlMappingSourcesInput`<sup>Optional</sup> <a name="ControlMappingSourcesInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSources[] ControlMappingSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestingInformationInput`<sup>Optional</sup> <a name="TestingInformationInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput"></a>

```csharp
public string TestingInformationInput { get; }
```

- *Type:* string

---

##### `ActionPlanInstructions`<sup>Required</sup> <a name="ActionPlanInstructions" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions"></a>

```csharp
public string ActionPlanInstructions { get; }
```

- *Type:* string

---

##### `ActionPlanTitle`<sup>Required</sup> <a name="ActionPlanTitle" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle"></a>

```csharp
public string ActionPlanTitle { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TestingInformation`<sup>Required</sup> <a name="TestingInformation" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation"></a>

```csharp
public string TestingInformation { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerControlConfig <a name="AuditmanagerControlConfig" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ActionPlanInstructions = null,
    string ActionPlanTitle = null,
    IResolvable|AuditmanagerControlControlMappingSources[] ControlMappingSources = null,
    string Description = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TestingInformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#name AuditmanagerControl#name}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions">ActionPlanInstructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle">ActionPlanTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources">ControlMappingSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]</code> | control_mapping_sources block. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#description AuditmanagerControl#description}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#tags AuditmanagerControl#tags}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation">TestingInformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#testing_information AuditmanagerControl#testing_information}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#name AuditmanagerControl#name}.

---

##### `ActionPlanInstructions`<sup>Optional</sup> <a name="ActionPlanInstructions" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions"></a>

```csharp
public string ActionPlanInstructions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}.

---

##### `ActionPlanTitle`<sup>Optional</sup> <a name="ActionPlanTitle" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle"></a>

```csharp
public string ActionPlanTitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}.

---

##### `ControlMappingSources`<sup>Optional</sup> <a name="ControlMappingSources" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSources[] ControlMappingSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#description AuditmanagerControl#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#region AuditmanagerControl#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#tags AuditmanagerControl#tags}.

---

##### `TestingInformation`<sup>Optional</sup> <a name="TestingInformation" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation"></a>

```csharp
public string TestingInformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#testing_information AuditmanagerControl#testing_information}.

---

### AuditmanagerControlControlMappingSources <a name="AuditmanagerControlControlMappingSources" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlControlMappingSources {
    string SourceName,
    string SourceSetUpOption,
    string SourceType,
    string SourceDescription = null,
    string SourceFrequency = null,
    IResolvable|AuditmanagerControlControlMappingSourcesSourceKeyword[] SourceKeyword = null,
    string TroubleshootingText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_name AuditmanagerControl#source_name}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption">SourceSetUpOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_type AuditmanagerControl#source_type}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription">SourceDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_description AuditmanagerControl#source_description}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency">SourceFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword">SourceKeyword</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText">TroubleshootingText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}. |

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_name AuditmanagerControl#source_name}.

---

##### `SourceSetUpOption`<sup>Required</sup> <a name="SourceSetUpOption" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption"></a>

```csharp
public string SourceSetUpOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_type AuditmanagerControl#source_type}.

---

##### `SourceDescription`<sup>Optional</sup> <a name="SourceDescription" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription"></a>

```csharp
public string SourceDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_description AuditmanagerControl#source_description}.

---

##### `SourceFrequency`<sup>Optional</sup> <a name="SourceFrequency" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency"></a>

```csharp
public string SourceFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}.

---

##### `SourceKeyword`<sup>Optional</sup> <a name="SourceKeyword" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSourcesSourceKeyword[] SourceKeyword { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}.

---

##### `TroubleshootingText`<sup>Optional</sup> <a name="TroubleshootingText" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText"></a>

```csharp
public string TroubleshootingText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}.

---

### AuditmanagerControlControlMappingSourcesSourceKeyword <a name="AuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlControlMappingSourcesSourceKeyword {
    string KeywordInputType = null,
    string KeywordValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType">KeywordInputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue">KeywordValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}. |

---

##### `KeywordInputType`<sup>Optional</sup> <a name="KeywordInputType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType"></a>

```csharp
public string KeywordInputType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}.

---

##### `KeywordValue`<sup>Optional</sup> <a name="KeywordValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue"></a>

```csharp
public string KeywordValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerControlControlMappingSourcesList <a name="AuditmanagerControlControlMappingSourcesList" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlControlMappingSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get"></a>

```csharp
private AuditmanagerControlControlMappingSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

---


### AuditmanagerControlControlMappingSourcesOutputReference <a name="AuditmanagerControlControlMappingSourcesOutputReference" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlControlMappingSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">PutSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription">ResetSourceDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency">ResetSourceFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">ResetSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText">ResetTroubleshootingText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceKeyword` <a name="PutSourceKeyword" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```csharp
private void PutSourceKeyword(IResolvable|AuditmanagerControlControlMappingSourcesSourceKeyword[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---

##### `ResetSourceDescription` <a name="ResetSourceDescription" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription"></a>

```csharp
private void ResetSourceDescription()
```

##### `ResetSourceFrequency` <a name="ResetSourceFrequency" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency"></a>

```csharp
private void ResetSourceFrequency()
```

##### `ResetSourceKeyword` <a name="ResetSourceKeyword" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```csharp
private void ResetSourceKeyword()
```

##### `ResetTroubleshootingText` <a name="ResetTroubleshootingText" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText"></a>

```csharp
private void ResetTroubleshootingText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">SourceKeyword</a></code> | <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput">SourceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput">SourceFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">SourceKeywordInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput">SourceSetUpOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput">TroubleshootingTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">SourceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">SourceFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">SourceSetUpOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">TroubleshootingText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `SourceKeyword`<sup>Required</sup> <a name="SourceKeyword" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```csharp
public AuditmanagerControlControlMappingSourcesSourceKeywordList SourceKeyword { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `SourceDescriptionInput`<sup>Optional</sup> <a name="SourceDescriptionInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput"></a>

```csharp
public string SourceDescriptionInput { get; }
```

- *Type:* string

---

##### `SourceFrequencyInput`<sup>Optional</sup> <a name="SourceFrequencyInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput"></a>

```csharp
public string SourceFrequencyInput { get; }
```

- *Type:* string

---

##### `SourceKeywordInput`<sup>Optional</sup> <a name="SourceKeywordInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSourcesSourceKeyword[] SourceKeywordInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceSetUpOptionInput`<sup>Optional</sup> <a name="SourceSetUpOptionInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput"></a>

```csharp
public string SourceSetUpOptionInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `TroubleshootingTextInput`<sup>Optional</sup> <a name="TroubleshootingTextInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput"></a>

```csharp
public string TroubleshootingTextInput { get; }
```

- *Type:* string

---

##### `SourceDescription`<sup>Required</sup> <a name="SourceDescription" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```csharp
public string SourceDescription { get; }
```

- *Type:* string

---

##### `SourceFrequency`<sup>Required</sup> <a name="SourceFrequency" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```csharp
public string SourceFrequency { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceSetUpOption`<sup>Required</sup> <a name="SourceSetUpOption" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```csharp
public string SourceSetUpOption { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `TroubleshootingText`<sup>Required</sup> <a name="TroubleshootingText" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```csharp
public string TroubleshootingText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>

---


### AuditmanagerControlControlMappingSourcesSourceKeywordList <a name="AuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlControlMappingSourcesSourceKeywordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```csharp
private AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSourcesSourceKeyword[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---


### AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resetKeywordInputType">ResetKeywordInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resetKeywordValue">ResetKeywordValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeywordInputType` <a name="ResetKeywordInputType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resetKeywordInputType"></a>

```csharp
private void ResetKeywordInputType()
```

##### `ResetKeywordValue` <a name="ResetKeywordValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resetKeywordValue"></a>

```csharp
private void ResetKeywordValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput">KeywordInputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput">KeywordValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">KeywordInputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">KeywordValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeywordInputTypeInput`<sup>Optional</sup> <a name="KeywordInputTypeInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput"></a>

```csharp
public string KeywordInputTypeInput { get; }
```

- *Type:* string

---

##### `KeywordValueInput`<sup>Optional</sup> <a name="KeywordValueInput" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput"></a>

```csharp
public string KeywordValueInput { get; }
```

- *Type:* string

---

##### `KeywordInputType`<sup>Required</sup> <a name="KeywordInputType" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```csharp
public string KeywordInputType { get; }
```

- *Type:* string

---

##### `KeywordValue`<sup>Required</sup> <a name="KeywordValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```csharp
public string KeywordValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerControlControlMappingSourcesSourceKeyword InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>

---



