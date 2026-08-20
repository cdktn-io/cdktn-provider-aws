# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeguruprofilerProfilingGroup(Construct Scope, string Id, CodeguruprofilerProfilingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig">PutAgentOrchestrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentOrchestrationConfig">ResetAgentOrchestrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">ResetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentOrchestrationConfig` <a name="PutAgentOrchestrationConfig" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig"></a>

```csharp
private void PutAgentOrchestrationConfig(IResolvable|CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]

---

##### `ResetAgentOrchestrationConfig` <a name="ResetAgentOrchestrationConfig" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentOrchestrationConfig"></a>

```csharp
private void ResetAgentOrchestrationConfig()
```

##### `ResetComputePlatform` <a name="ResetComputePlatform" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```csharp
private void ResetComputePlatform()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeguruprofilerProfilingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeguruprofilerProfilingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeguruprofilerProfilingGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CodeguruprofilerProfilingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfig">AgentOrchestrationConfig</a></code> | <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList">CodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfigInput">AgentOrchestrationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">ComputePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentOrchestrationConfig`<sup>Required</sup> <a name="AgentOrchestrationConfig" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfig"></a>

```csharp
public CodeguruprofilerProfilingGroupAgentOrchestrationConfigList AgentOrchestrationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList">CodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AgentOrchestrationConfigInput`<sup>Optional</sup> <a name="AgentOrchestrationConfigInput" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfigInput"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] AgentOrchestrationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]

---

##### `ComputePlatformInput`<sup>Optional</sup> <a name="ComputePlatformInput" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```csharp
public string ComputePlatformInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentOrchestrationConfig <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfig" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeguruprofilerProfilingGroupAgentOrchestrationConfig {
    bool|IResolvable ProfilingEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.property.profilingEnabled">ProfilingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}. |

---

##### `ProfilingEnabled`<sup>Required</sup> <a name="ProfilingEnabled" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.property.profilingEnabled"></a>

```csharp
public bool|IResolvable ProfilingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}.

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeguruprofilerProfilingGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] AgentOrchestrationConfig = null,
    string ComputePlatform = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentOrchestrationConfig">AgentOrchestrationConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]</code> | agent_orchestration_config block. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}.

---

##### `AgentOrchestrationConfig`<sup>Optional</sup> <a name="AgentOrchestrationConfig" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentOrchestrationConfig"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] AgentOrchestrationConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]

agent_orchestration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}

---

##### `ComputePlatform`<sup>Optional</sup> <a name="ComputePlatform" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#region CodeguruprofilerProfilingGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentOrchestrationConfigList <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfigList" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeguruprofilerProfilingGroupAgentOrchestrationConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get"></a>

```csharp
private CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>[]

---


### CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabledInput">ProfilingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled">ProfilingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfilingEnabledInput`<sup>Optional</sup> <a name="ProfilingEnabledInput" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabledInput"></a>

```csharp
public bool|IResolvable ProfilingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfilingEnabled`<sup>Required</sup> <a name="ProfilingEnabled" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled"></a>

```csharp
public bool|IResolvable ProfilingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAgentOrchestrationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>

---



