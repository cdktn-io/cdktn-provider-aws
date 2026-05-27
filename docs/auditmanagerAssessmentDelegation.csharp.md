# `auditmanagerAssessmentDelegation` Submodule <a name="`auditmanagerAssessmentDelegation` Submodule" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentDelegation <a name="AuditmanagerAssessmentDelegation" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerAssessmentDelegation(Construct Scope, string Id, AuditmanagerAssessmentDelegationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig">AuditmanagerAssessmentDelegationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig">AuditmanagerAssessmentDelegationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentDelegation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentDelegation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentDelegation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentDelegation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AuditmanagerAssessmentDelegation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuditmanagerAssessmentDelegation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAssessmentDelegation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAssessmentDelegation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentDelegation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId">DelegationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput">AssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput">ControlSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId">ControlSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DelegationId`<sup>Required</sup> <a name="DelegationId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId"></a>

```csharp
public string DelegationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AssessmentIdInput`<sup>Optional</sup> <a name="AssessmentIdInput" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput"></a>

```csharp
public string AssessmentIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ControlSetIdInput`<sup>Optional</sup> <a name="ControlSetIdInput" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput"></a>

```csharp
public string ControlSetIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ControlSetId`<sup>Required</sup> <a name="ControlSetId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId"></a>

```csharp
public string ControlSetId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentDelegationConfig <a name="AuditmanagerAssessmentDelegationConfig" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AuditmanagerAssessmentDelegationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssessmentId,
    string ControlSetId,
    string RoleArn,
    string RoleType,
    string Comment = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId">AssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId">ControlSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType">RoleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |
| <code><a href="#@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId"></a>

```csharp
public string AssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `ControlSetId`<sup>Required</sup> <a name="ControlSetId" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId"></a>

```csharp
public string ControlSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/auditmanager_assessment_delegation#region AuditmanagerAssessmentDelegation#region}

---



