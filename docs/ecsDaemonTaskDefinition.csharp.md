# `ecsDaemonTaskDefinition` Submodule <a name="`ecsDaemonTaskDefinition` Submodule" id="@cdktn/provider-aws.ecsDaemonTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemonTaskDefinition <a name="EcsDaemonTaskDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition aws_ecs_daemon_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinition(Construct Scope, string Id, EcsDaemonTaskDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig">EcsDaemonTaskDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig">EcsDaemonTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition">PutContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition">ResetContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn">ResetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerDefinition` <a name="PutContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition"></a>

```csharp
private void PutContainerDefinition(IResolvable|EcsDaemonTaskDefinitionContainerDefinition[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

---

##### `PutVolume` <a name="PutVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume"></a>

```csharp
private void PutVolume(IResolvable|EcsDaemonTaskDefinitionVolume[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

---

##### `ResetContainerDefinition` <a name="ResetContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition"></a>

```csharp
private void ResetContainerDefinition()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaskRoleArn` <a name="ResetTaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn"></a>

```csharp
private void ResetTaskRoleArn()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume"></a>

```csharp
private void ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcsDaemonTaskDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcsDaemonTaskDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcsDaemonTaskDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EcsDaemonTaskDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsDaemonTaskDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsDaemonTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemonTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition">ContainerDefinition</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume">Volume</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput">ContainerDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput">TaskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput">VolumeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContainerDefinition`<sup>Required</sup> <a name="ContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionList ContainerDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume"></a>

```csharp
public EcsDaemonTaskDefinitionVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a>

---

##### `ContainerDefinitionInput`<sup>Optional</sup> <a name="ContainerDefinitionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinition[] ContainerDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskRoleArnInput`<sup>Optional</sup> <a name="TaskRoleArnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput"></a>

```csharp
public string TaskRoleArnInput { get; }
```

- *Type:* string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolume[] VolumeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonTaskDefinitionConfig <a name="EcsDaemonTaskDefinitionConfig" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Family,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinition[] ContainerDefinition = null,
    string Cpu = null,
    string ExecutionRoleArn = null,
    string Memory = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TaskRoleArn = null,
    IResolvable|EcsDaemonTaskDefinitionVolume[] Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family">Family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition">ContainerDefinition</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]</code> | container_definition block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume">Volume</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]</code> | volume block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}.

---

##### `ContainerDefinition`<sup>Optional</sup> <a name="ContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinition[] ContainerDefinition { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

container_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_definition EcsDaemonTaskDefinition#container_definition}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#region EcsDaemonTaskDefinition#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}.

---

##### `TaskRoleArn`<sup>Optional</sup> <a name="TaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolume[] Volume { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#volume EcsDaemonTaskDefinition#volume}

---

### EcsDaemonTaskDefinitionContainerDefinition <a name="EcsDaemonTaskDefinitionContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinition {
    string Image,
    string[] Command = null,
    double Cpu = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionDependsOn[] DependsOn = null,
    string[] EntryPoint = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironment[] Environment = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[] EnvironmentFile = null,
    bool|IResolvable Essential = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[] FirelensConfiguration = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[] HealthCheck = null,
    bool|IResolvable Interactive = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[] LinuxParameters = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[] LogConfiguration = null,
    double Memory = null,
    double MemoryReservation = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionMountPoint[] MountPoint = null,
    string Name = null,
    bool|IResolvable Privileged = null,
    bool|IResolvable PseudoTerminal = null,
    bool|IResolvable ReadonlyRootFilesystem = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[] RepositoryCredentials = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[] RestartPolicy = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSecret[] Secret = null,
    double StartTimeout = null,
    double StopTimeout = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSystemControl[] SystemControl = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionUlimit[] Ulimit = null,
    string User = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu">Cpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]</code> | depends_on block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment">Environment</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]</code> | environment block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile">EnvironmentFile</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]</code> | environment_file block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential">Essential</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration">FirelensConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]</code> | firelens_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck">HealthCheck</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]</code> | health_check block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive">Interactive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters">LinuxParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]</code> | linux_parameters block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration">LogConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]</code> | log_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory">Memory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint">MountPoint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]</code> | mount_point block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged">Privileged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal">PseudoTerminal</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem">ReadonlyRootFilesystem</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials">RepositoryCredentials</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]</code> | repository_credentials block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy">RestartPolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]</code> | restart_policy block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret">Secret</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout">StartTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout">StopTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl">SystemControl</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]</code> | system_control block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit">Ulimit</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]</code> | ulimit block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionDependsOn[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

depends_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#depends_on EcsDaemonTaskDefinition#depends_on}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironment[] Environment { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#environment EcsDaemonTaskDefinition#environment}

---

##### `EnvironmentFile`<sup>Optional</sup> <a name="EnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[] EnvironmentFile { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

environment_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#environment_file EcsDaemonTaskDefinition#environment_file}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential"></a>

```csharp
public bool|IResolvable Essential { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}.

---

##### `FirelensConfiguration`<sup>Optional</sup> <a name="FirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[] FirelensConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

firelens_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#firelens_configuration EcsDaemonTaskDefinition#firelens_configuration}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[] HealthCheck { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#health_check EcsDaemonTaskDefinition#health_check}

---

##### `Interactive`<sup>Optional</sup> <a name="Interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive"></a>

```csharp
public bool|IResolvable Interactive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}.

---

##### `LinuxParameters`<sup>Optional</sup> <a name="LinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[] LinuxParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

linux_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#linux_parameters EcsDaemonTaskDefinition#linux_parameters}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[] LogConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#log_configuration EcsDaemonTaskDefinition#log_configuration}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}.

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionMountPoint[] MountPoint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

mount_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#mount_point EcsDaemonTaskDefinition#mount_point}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `Privileged`<sup>Optional</sup> <a name="Privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged"></a>

```csharp
public bool|IResolvable Privileged { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}.

---

##### `PseudoTerminal`<sup>Optional</sup> <a name="PseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal"></a>

```csharp
public bool|IResolvable PseudoTerminal { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}.

---

##### `ReadonlyRootFilesystem`<sup>Optional</sup> <a name="ReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem"></a>

```csharp
public bool|IResolvable ReadonlyRootFilesystem { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}.

---

##### `RepositoryCredentials`<sup>Optional</sup> <a name="RepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[] RepositoryCredentials { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#repository_credentials EcsDaemonTaskDefinition#repository_credentials}

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[] RestartPolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#restart_policy EcsDaemonTaskDefinition#restart_policy}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSecret[] Secret { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#secret EcsDaemonTaskDefinition#secret}

---

##### `StartTimeout`<sup>Optional</sup> <a name="StartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout"></a>

```csharp
public double StartTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}.

---

##### `StopTimeout`<sup>Optional</sup> <a name="StopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout"></a>

```csharp
public double StopTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}.

---

##### `SystemControl`<sup>Optional</sup> <a name="SystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSystemControl[] SystemControl { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

system_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#system_control EcsDaemonTaskDefinition#system_control}

---

##### `Ulimit`<sup>Optional</sup> <a name="Ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionUlimit[] Ulimit { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#ulimit EcsDaemonTaskDefinition#ulimit}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}.

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}.

---

### EcsDaemonTaskDefinitionContainerDefinitionDependsOn <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionDependsOn {
    string Condition,
    string ContainerName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironment <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionEnvironment {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile {
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration {
    string Type,
    System.Collections.Generic.IDictionary<string, string> Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionHealthCheck <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionHealthCheck {
    string[] Command,
    double Interval = null,
    double Retries = null,
    double StartPeriod = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries">Retries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod">StartPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}. |

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}.

---

##### `StartPeriod`<sup>Optional</sup> <a name="StartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod"></a>

```csharp
public double StartPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters {
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[] Capabilities = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[] Device = null,
    bool|IResolvable InitProcessEnabled = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[] Tmpfs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities">Capabilities</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]</code> | capabilities block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device">Device</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]</code> | device block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled">InitProcessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs">Tmpfs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]</code> | tmpfs block. |

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[] Capabilities { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#capabilities EcsDaemonTaskDefinition#capabilities}

---

##### `Device`<sup>Optional</sup> <a name="Device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[] Device { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#device EcsDaemonTaskDefinition#device}

---

##### `InitProcessEnabled`<sup>Optional</sup> <a name="InitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled"></a>

```csharp
public bool|IResolvable InitProcessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}.

---

##### `Tmpfs`<sup>Optional</sup> <a name="Tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[] Tmpfs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

tmpfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#tmpfs EcsDaemonTaskDefinition#tmpfs}

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities {
    string[] Add = null,
    string[] Drop = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add">Add</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop">Drop</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add"></a>

```csharp
public string[] Add { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}.

---

##### `Drop`<sup>Optional</sup> <a name="Drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop"></a>

```csharp
public string[] Drop { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice {
    string HostPath,
    string ContainerPath = null,
    string[] Permissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath">HostPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath">ContainerPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions">Permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}. |

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath"></a>

```csharp
public string HostPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}.

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath"></a>

```csharp
public string ContainerPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs {
    string ContainerPath,
    double Size,
    string[] MountOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath">ContainerPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}. |

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath"></a>

```csharp
public string ContainerPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration {
    string LogDriver,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[] SecretOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver">LogDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption">SecretOption</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]</code> | secret_option block. |

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver"></a>

```csharp
public string LogDriver { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

##### `SecretOption`<sup>Optional</sup> <a name="SecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[] SecretOption { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

secret_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#secret_option EcsDaemonTaskDefinition#secret_option}

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption {
    string Name,
    string ValueFrom
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionMountPoint <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionMountPoint {
    string ContainerPath = null,
    bool|IResolvable ReadOnly = null,
    string SourceVolume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath">ContainerPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume">SourceVolume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}. |

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath"></a>

```csharp
public string ContainerPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}.

---

##### `SourceVolume`<sup>Optional</sup> <a name="SourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume"></a>

```csharp
public string SourceVolume { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials {
    string CredentialsParameter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}. |

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy {
    bool|IResolvable Enabled,
    double[] IgnoredExitCodes = null,
    double RestartAttemptPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes">IgnoredExitCodes</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod">RestartAttemptPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}.

---

##### `IgnoredExitCodes`<sup>Optional</sup> <a name="IgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes"></a>

```csharp
public double[] IgnoredExitCodes { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}.

---

##### `RestartAttemptPeriod`<sup>Optional</sup> <a name="RestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod"></a>

```csharp
public double RestartAttemptPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSecret <a name="EcsDaemonTaskDefinitionContainerDefinitionSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionSecret {
    string Name,
    string ValueFrom
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSystemControl <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionSystemControl {
    string Namespace = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionUlimit <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionUlimit {
    double HardLimit,
    string Name,
    double SoftLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit">HardLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit">SoftLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}. |

---

##### `HardLimit`<sup>Required</sup> <a name="HardLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit"></a>

```csharp
public double HardLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `SoftLimit`<sup>Required</sup> <a name="SoftLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit"></a>

```csharp
public double SoftLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}.

---

### EcsDaemonTaskDefinitionVolume <a name="EcsDaemonTaskDefinitionVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionVolume {
    string Name,
    IResolvable|EcsDaemonTaskDefinitionVolumeHost[] Host = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host">Host</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]</code> | host block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolumeHost[] Host { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#host EcsDaemonTaskDefinition#host}

---

### EcsDaemonTaskDefinitionVolumeHost <a name="EcsDaemonTaskDefinitionVolumeHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionVolumeHost {
    string SourcePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath">SourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}. |

---

##### `SourcePath`<sup>Optional</sup> <a name="SourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath"></a>

```csharp
public string SourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonTaskDefinitionContainerDefinitionDependsOnList <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionDependsOnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionDependsOn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionDependsOn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironment[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod">ResetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetStartPeriod` <a name="ResetStartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod"></a>

```csharp
private void ResetStartPeriod()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput">StartPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `StartPeriodInput`<sup>Optional</sup> <a name="StartPeriodInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput"></a>

```csharp
public double StartPeriodInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod"></a>

```csharp
public double StartPeriod { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionHealthCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop">ResetDrop</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd"></a>

```csharp
private void ResetAdd()
```

##### `ResetDrop` <a name="ResetDrop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop"></a>

```csharp
private void ResetDrop()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput">AddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput">DropInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add">Add</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop">Drop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput"></a>

```csharp
public string[] AddInput { get; }
```

- *Type:* string[]

---

##### `DropInput`<sup>Optional</sup> <a name="DropInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput"></a>

```csharp
public string[] DropInput { get; }
```

- *Type:* string[]

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add"></a>

```csharp
public string[] Add { get; }
```

- *Type:* string[]

---

##### `Drop`<sup>Required</sup> <a name="Drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```csharp
public string[] Drop { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath"></a>

```csharp
private void ResetContainerPath()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions"></a>

```csharp
private void ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput">HostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath">ContainerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath">HostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput"></a>

```csharp
public string ContainerPathInput { get; }
```

- *Type:* string

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput"></a>

```csharp
public string HostPathInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath"></a>

```csharp
public string ContainerPath { get; }
```

- *Type:* string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath"></a>

```csharp
public string HostPath { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice">PutDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs">PutTmpfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice">ResetDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled">ResetInitProcessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs">ResetTmpfs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities"></a>

```csharp
private void PutCapabilities(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

---

##### `PutDevice` <a name="PutDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice"></a>

```csharp
private void PutDevice(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

---

##### `PutTmpfs` <a name="PutTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs"></a>

```csharp
private void PutTmpfs(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetDevice` <a name="ResetDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice"></a>

```csharp
private void ResetDevice()
```

##### `ResetInitProcessEnabled` <a name="ResetInitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled"></a>

```csharp
private void ResetInitProcessEnabled()
```

##### `ResetTmpfs` <a name="ResetTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs"></a>

```csharp
private void ResetTmpfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device">Device</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs">Tmpfs</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput">DeviceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput">InitProcessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput">TmpfsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled">InitProcessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList Capabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a>

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList Device { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a>

---

##### `Tmpfs`<sup>Required</sup> <a name="Tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList Tmpfs { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[] CapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[] DeviceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

---

##### `InitProcessEnabledInput`<sup>Optional</sup> <a name="InitProcessEnabledInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput"></a>

```csharp
public bool|IResolvable InitProcessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TmpfsInput`<sup>Optional</sup> <a name="TmpfsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[] TmpfsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

---

##### `InitProcessEnabled`<sup>Required</sup> <a name="InitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled"></a>

```csharp
public bool|IResolvable InitProcessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath">ContainerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput"></a>

```csharp
public string ContainerPathInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput"></a>

```csharp
public string[] MountOptionsInput { get; }
```

- *Type:* string[]

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```csharp
public string ContainerPath { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; }
```

- *Type:* string[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionList <a name="EcsDaemonTaskDefinitionContainerDefinitionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinition[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption">PutSecretOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption">ResetSecretOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretOption` <a name="PutSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption"></a>

```csharp
private void PutSecretOption(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

---

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSecretOption` <a name="ResetSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption"></a>

```csharp
private void ResetSecretOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption">SecretOption</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput">LogDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput">SecretOptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver">LogDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretOption`<sup>Required</sup> <a name="SecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList SecretOption { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a>

---

##### `LogDriverInput`<sup>Optional</sup> <a name="LogDriverInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput"></a>

```csharp
public string LogDriverInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretOptionInput`<sup>Optional</sup> <a name="SecretOptionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[] SecretOptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver"></a>

```csharp
public string LogDriver { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointList <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionMountPointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionMountPoint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume">ResetSourceVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath"></a>

```csharp
private void ResetContainerPath()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSourceVolume` <a name="ResetSourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume"></a>

```csharp
private void ResetSourceVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput">SourceVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath">ContainerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume">SourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput"></a>

```csharp
public string ContainerPathInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceVolumeInput`<sup>Optional</sup> <a name="SourceVolumeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput"></a>

```csharp
public string SourceVolumeInput { get; }
```

- *Type:* string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath"></a>

```csharp
public string ContainerPath { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceVolume`<sup>Required</sup> <a name="SourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume"></a>

```csharp
public string SourceVolume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionMountPoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn">PutDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile">PutEnvironmentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration">PutFirelensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters">PutLinuxParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint">PutMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials">PutRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy">PutRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl">PutSystemControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit">PutUlimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile">ResetEnvironmentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration">ResetFirelensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive">ResetInteractive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters">ResetLinuxParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged">ResetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal">ResetPseudoTerminal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem">ResetReadonlyRootFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials">ResetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout">ResetStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout">ResetStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl">ResetSystemControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit">ResetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependsOn` <a name="PutDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn"></a>

```csharp
private void PutDependsOn(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionDependsOn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironment[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

---

##### `PutEnvironmentFile` <a name="PutEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile"></a>

```csharp
private void PutEnvironmentFile(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

---

##### `PutFirelensConfiguration` <a name="PutFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration"></a>

```csharp
private void PutFirelensConfiguration(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck"></a>

```csharp
private void PutHealthCheck(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

---

##### `PutLinuxParameters` <a name="PutLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters"></a>

```csharp
private void PutLinuxParameters(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

---

##### `PutMountPoint` <a name="PutMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint"></a>

```csharp
private void PutMountPoint(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionMountPoint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

---

##### `PutRepositoryCredentials` <a name="PutRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials"></a>

```csharp
private void PutRepositoryCredentials(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

---

##### `PutRestartPolicy` <a name="PutRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy"></a>

```csharp
private void PutRestartPolicy(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret"></a>

```csharp
private void PutSecret(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSecret[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

---

##### `PutSystemControl` <a name="PutSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl"></a>

```csharp
private void PutSystemControl(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSystemControl[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

---

##### `PutUlimit` <a name="PutUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit"></a>

```csharp
private void PutUlimit(IResolvable|EcsDaemonTaskDefinitionContainerDefinitionUlimit[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn"></a>

```csharp
private void ResetDependsOn()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEnvironmentFile` <a name="ResetEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile"></a>

```csharp
private void ResetEnvironmentFile()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential"></a>

```csharp
private void ResetEssential()
```

##### `ResetFirelensConfiguration` <a name="ResetFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration"></a>

```csharp
private void ResetFirelensConfiguration()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetInteractive` <a name="ResetInteractive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive"></a>

```csharp
private void ResetInteractive()
```

##### `ResetLinuxParameters` <a name="ResetLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters"></a>

```csharp
private void ResetLinuxParameters()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation"></a>

```csharp
private void ResetMemoryReservation()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint"></a>

```csharp
private void ResetMountPoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrivileged` <a name="ResetPrivileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged"></a>

```csharp
private void ResetPrivileged()
```

##### `ResetPseudoTerminal` <a name="ResetPseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal"></a>

```csharp
private void ResetPseudoTerminal()
```

##### `ResetReadonlyRootFilesystem` <a name="ResetReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem"></a>

```csharp
private void ResetReadonlyRootFilesystem()
```

##### `ResetRepositoryCredentials` <a name="ResetRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials"></a>

```csharp
private void ResetRepositoryCredentials()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy"></a>

```csharp
private void ResetRestartPolicy()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetStartTimeout` <a name="ResetStartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout"></a>

```csharp
private void ResetStartTimeout()
```

##### `ResetStopTimeout` <a name="ResetStopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout"></a>

```csharp
private void ResetStopTimeout()
```

##### `ResetSystemControl` <a name="ResetSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl"></a>

```csharp
private void ResetSystemControl()
```

##### `ResetUlimit` <a name="ResetUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit"></a>

```csharp
private void ResetUlimit()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn">DependsOn</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile">EnvironmentFile</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration">FirelensConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters">LinuxParameters</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint">MountPoint</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl">SystemControl</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit">Ulimit</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput">EnvironmentFileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput">EssentialInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput">FirelensConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput">InteractiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput">LinuxParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput">PrivilegedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput">PseudoTerminalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput">ReadonlyRootFilesystemInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput">RepositoryCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput">SecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput">StartTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput">StopTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput">SystemControlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput">UlimitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential">Essential</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive">Interactive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged">Privileged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal">PseudoTerminal</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem">ReadonlyRootFilesystem</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout">StartTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout">StopTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionDependsOnList DependsOn { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a>

---

##### `EnvironmentFile`<sup>Required</sup> <a name="EnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList EnvironmentFile { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a>

---

##### `FirelensConfiguration`<sup>Required</sup> <a name="FirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList FirelensConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList HealthCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a>

---

##### `LinuxParameters`<sup>Required</sup> <a name="LinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList LinuxParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList LogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionMountPointList MountPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a>

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList RepositoryCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a>

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList RestartPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionSecretList Secret { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a>

---

##### `SystemControl`<sup>Required</sup> <a name="SystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionSystemControlList SystemControl { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a>

---

##### `Ulimit`<sup>Required</sup> <a name="Ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit"></a>

```csharp
public EcsDaemonTaskDefinitionContainerDefinitionUlimitList Ulimit { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionDependsOn[] DependsOnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput"></a>

```csharp
public string[] EntryPointInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentFileInput`<sup>Optional</sup> <a name="EnvironmentFileInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[] EnvironmentFileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionEnvironment[] EnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput"></a>

```csharp
public bool|IResolvable EssentialInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FirelensConfigurationInput`<sup>Optional</sup> <a name="FirelensConfigurationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[] FirelensConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[] HealthCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InteractiveInput`<sup>Optional</sup> <a name="InteractiveInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput"></a>

```csharp
public bool|IResolvable InteractiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LinuxParametersInput`<sup>Optional</sup> <a name="LinuxParametersInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[] LinuxParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[] LogConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionMountPoint[] MountPointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivilegedInput`<sup>Optional</sup> <a name="PrivilegedInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput"></a>

```csharp
public bool|IResolvable PrivilegedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PseudoTerminalInput`<sup>Optional</sup> <a name="PseudoTerminalInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput"></a>

```csharp
public bool|IResolvable PseudoTerminalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadonlyRootFilesystemInput`<sup>Optional</sup> <a name="ReadonlyRootFilesystemInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput"></a>

```csharp
public bool|IResolvable ReadonlyRootFilesystemInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RepositoryCredentialsInput`<sup>Optional</sup> <a name="RepositoryCredentialsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[] RepositoryCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[] RestartPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSecret[] SecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

---

##### `StartTimeoutInput`<sup>Optional</sup> <a name="StartTimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput"></a>

```csharp
public double StartTimeoutInput { get; }
```

- *Type:* double

---

##### `StopTimeoutInput`<sup>Optional</sup> <a name="StopTimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput"></a>

```csharp
public double StopTimeoutInput { get; }
```

- *Type:* double

---

##### `SystemControlInput`<sup>Optional</sup> <a name="SystemControlInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSystemControl[] SystemControlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

---

##### `UlimitInput`<sup>Optional</sup> <a name="UlimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionUlimit[] UlimitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint"></a>

```csharp
public string[] EntryPoint { get; }
```

- *Type:* string[]

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential"></a>

```csharp
public bool|IResolvable Essential { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Interactive`<sup>Required</sup> <a name="Interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive"></a>

```csharp
public bool|IResolvable Interactive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Privileged`<sup>Required</sup> <a name="Privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged"></a>

```csharp
public bool|IResolvable Privileged { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PseudoTerminal`<sup>Required</sup> <a name="PseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal"></a>

```csharp
public bool|IResolvable PseudoTerminal { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadonlyRootFilesystem`<sup>Required</sup> <a name="ReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem"></a>

```csharp
public bool|IResolvable ReadonlyRootFilesystem { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StartTimeout`<sup>Required</sup> <a name="StartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout"></a>

```csharp
public double StartTimeout { get; }
```

- *Type:* double

---

##### `StopTimeout`<sup>Required</sup> <a name="StopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout"></a>

```csharp
public double StopTimeout { get; }
```

- *Type:* double

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput">CredentialsParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialsParameterInput`<sup>Optional</sup> <a name="CredentialsParameterInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```csharp
public string CredentialsParameterInput { get; }
```

- *Type:* string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes">ResetIgnoredExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod">ResetRestartAttemptPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoredExitCodes` <a name="ResetIgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes"></a>

```csharp
private void ResetIgnoredExitCodes()
```

##### `ResetRestartAttemptPeriod` <a name="ResetRestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod"></a>

```csharp
private void ResetRestartAttemptPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput">IgnoredExitCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput">RestartAttemptPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes">IgnoredExitCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod">RestartAttemptPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoredExitCodesInput`<sup>Optional</sup> <a name="IgnoredExitCodesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput"></a>

```csharp
public double[] IgnoredExitCodesInput { get; }
```

- *Type:* double[]

---

##### `RestartAttemptPeriodInput`<sup>Optional</sup> <a name="RestartAttemptPeriodInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput"></a>

```csharp
public double RestartAttemptPeriodInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IgnoredExitCodes`<sup>Required</sup> <a name="IgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```csharp
public double[] IgnoredExitCodes { get; }
```

- *Type:* double[]

---

##### `RestartAttemptPeriod`<sup>Required</sup> <a name="RestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```csharp
public double RestartAttemptPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretList <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSecret[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlList <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionSystemControlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSystemControl[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionSystemControl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitList <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionUlimitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get"></a>

```csharp
private EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionUlimit[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput">HardLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput">SoftLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit">HardLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit">SoftLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HardLimitInput`<sup>Optional</sup> <a name="HardLimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput"></a>

```csharp
public double HardLimitInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SoftLimitInput`<sup>Optional</sup> <a name="SoftLimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput"></a>

```csharp
public double SoftLimitInput { get; }
```

- *Type:* double

---

##### `HardLimit`<sup>Required</sup> <a name="HardLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit"></a>

```csharp
public double HardLimit { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SoftLimit`<sup>Required</sup> <a name="SoftLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit"></a>

```csharp
public double SoftLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionContainerDefinitionUlimit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>

---


### EcsDaemonTaskDefinitionVolumeHostList <a name="EcsDaemonTaskDefinitionVolumeHostList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionVolumeHostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get"></a>

```csharp
private EcsDaemonTaskDefinitionVolumeHostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolumeHost[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

---


### EcsDaemonTaskDefinitionVolumeHostOutputReference <a name="EcsDaemonTaskDefinitionVolumeHostOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionVolumeHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath">ResetSourcePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourcePath` <a name="ResetSourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath"></a>

```csharp
private void ResetSourcePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput">SourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath">SourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourcePathInput`<sup>Optional</sup> <a name="SourcePathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput"></a>

```csharp
public string SourcePathInput { get; }
```

- *Type:* string

---

##### `SourcePath`<sup>Required</sup> <a name="SourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath"></a>

```csharp
public string SourcePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolumeHost InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>

---


### EcsDaemonTaskDefinitionVolumeList <a name="EcsDaemonTaskDefinitionVolumeList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get"></a>

```csharp
private EcsDaemonTaskDefinitionVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolume[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

---


### EcsDaemonTaskDefinitionVolumeOutputReference <a name="EcsDaemonTaskDefinitionVolumeOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EcsDaemonTaskDefinitionVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHost` <a name="PutHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost"></a>

```csharp
private void PutHost(IResolvable|EcsDaemonTaskDefinitionVolumeHost[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

---

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host">Host</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput">HostInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host"></a>

```csharp
public EcsDaemonTaskDefinitionVolumeHostList Host { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolumeHost[] HostInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsDaemonTaskDefinitionVolume InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>

---



