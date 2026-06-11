# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktn/provider-aws.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy aws_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicy(Construct Scope, string Id, BatchSchedulingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy">PutFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy">ResetFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFairSharePolicy` <a name="PutFairSharePolicy" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy"></a>

```csharp
private void PutFairSharePolicy(BatchSchedulingPolicyFairSharePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `ResetFairSharePolicy` <a name="ResetFairSharePolicy" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy"></a>

```csharp
private void ResetFairSharePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BatchSchedulingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BatchSchedulingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BatchSchedulingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BatchSchedulingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchSchedulingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy">FairSharePolicy</a></code> | <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput">FairSharePolicyInput</a></code> | <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FairSharePolicy`<sup>Required</sup> <a name="FairSharePolicy" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicyOutputReference FairSharePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a>

---

##### `FairSharePolicyInput`<sup>Optional</sup> <a name="FairSharePolicyInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicy FairSharePolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    BatchSchedulingPolicyFairSharePolicy FairSharePolicy = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy">FairSharePolicy</a></code> | <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | fair_share_policy block. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#id BatchSchedulingPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}.

---

##### `FairSharePolicy`<sup>Optional</sup> <a name="FairSharePolicy" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicy FairSharePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

fair_share_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#id BatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#region BatchSchedulingPolicy#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}.

---

### BatchSchedulingPolicyFairSharePolicy <a name="BatchSchedulingPolicyFairSharePolicy" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicy {
    double ComputeReservation = null,
    double ShareDecaySeconds = null,
    IResolvable|BatchSchedulingPolicyFairSharePolicyShareDistribution[] ShareDistribution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution">ShareDistribution</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]</code> | share_distribution block. |

---

##### `ComputeReservation`<sup>Optional</sup> <a name="ComputeReservation" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `ShareDecaySeconds`<sup>Optional</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `ShareDistribution`<sup>Optional</sup> <a name="ShareDistribution" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairSharePolicyShareDistribution[] ShareDistribution { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

share_distribution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairSharePolicyShareDistribution <a name="BatchSchedulingPolicyFairSharePolicyShareDistribution" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyShareDistribution {
    string ShareIdentifier,
    double WeightFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor">WeightFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `WeightFactor`<sup>Optional</sup> <a name="WeightFactor" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor"></a>

```csharp
public double WeightFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairSharePolicyOutputReference <a name="BatchSchedulingPolicyFairSharePolicyOutputReference" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution">PutShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation">ResetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds">ResetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution">ResetShareDistribution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShareDistribution` <a name="PutShareDistribution" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution"></a>

```csharp
private void PutShareDistribution(IResolvable|BatchSchedulingPolicyFairSharePolicyShareDistribution[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

---

##### `ResetComputeReservation` <a name="ResetComputeReservation" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation"></a>

```csharp
private void ResetComputeReservation()
```

##### `ResetShareDecaySeconds` <a name="ResetShareDecaySeconds" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds"></a>

```csharp
private void ResetShareDecaySeconds()
```

##### `ResetShareDistribution` <a name="ResetShareDistribution" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution"></a>

```csharp
private void ResetShareDistribution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution">ShareDistribution</a></code> | <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput">ComputeReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput">ShareDecaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput">ShareDistributionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareDistribution`<sup>Required</sup> <a name="ShareDistribution" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicyShareDistributionList ShareDistribution { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a>

---

##### `ComputeReservationInput`<sup>Optional</sup> <a name="ComputeReservationInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput"></a>

```csharp
public double ComputeReservationInput { get; }
```

- *Type:* double

---

##### `ShareDecaySecondsInput`<sup>Optional</sup> <a name="ShareDecaySecondsInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```csharp
public double ShareDecaySecondsInput { get; }
```

- *Type:* double

---

##### `ShareDistributionInput`<sup>Optional</sup> <a name="ShareDistributionInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairSharePolicyShareDistribution[] ShareDistributionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

---

##### `ComputeReservation`<sup>Required</sup> <a name="ComputeReservation" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; }
```

- *Type:* double

---

##### `ShareDecaySeconds`<sup>Required</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionList" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyShareDistributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get"></a>

```csharp
private BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairSharePolicyShareDistribution[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor">ResetWeightFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeightFactor` <a name="ResetWeightFactor" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```csharp
private void ResetWeightFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput">ShareIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput">WeightFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor">WeightFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareIdentifierInput`<sup>Optional</sup> <a name="ShareIdentifierInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```csharp
public string ShareIdentifierInput { get; }
```

- *Type:* string

---

##### `WeightFactorInput`<sup>Optional</sup> <a name="WeightFactorInput" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```csharp
public double WeightFactorInput { get; }
```

- *Type:* double

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; }
```

- *Type:* string

---

##### `WeightFactor`<sup>Required</sup> <a name="WeightFactor" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```csharp
public double WeightFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairSharePolicyShareDistribution InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>

---



