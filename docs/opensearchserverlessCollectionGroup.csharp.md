# `opensearchserverlessCollectionGroup` Submodule <a name="`opensearchserverlessCollectionGroup` Submodule" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollectionGroup <a name="OpensearchserverlessCollectionGroup" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group aws_opensearchserverless_collection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessCollectionGroup(Construct Scope, string Id, OpensearchserverlessCollectionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig">OpensearchserverlessCollectionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig">OpensearchserverlessCollectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits">PutCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits">ResetCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetGeneration">ResetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityLimits` <a name="PutCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits"></a>

```csharp
private void PutCapacityLimits(IResolvable|OpensearchserverlessCollectionGroupCapacityLimits[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.putCapacityLimits.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]

---

##### `ResetCapacityLimits` <a name="ResetCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetCapacityLimits"></a>

```csharp
private void ResetCapacityLimits()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetGeneration"></a>

```csharp
private void ResetGeneration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessCollectionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessCollectionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessCollectionGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OpensearchserverlessCollectionGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessCollectionGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits">CapacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList">OpensearchserverlessCollectionGroupCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput">CapacityLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generationInput">GenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput">StandbyReplicasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimits"></a>

```csharp
public OpensearchserverlessCollectionGroupCapacityLimitsList CapacityLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList">OpensearchserverlessCollectionGroupCapacityLimitsList</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CapacityLimitsInput`<sup>Optional</sup> <a name="CapacityLimitsInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.capacityLimitsInput"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionGroupCapacityLimits[] CapacityLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generationInput"></a>

```csharp
public string GenerationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StandbyReplicasInput`<sup>Optional</sup> <a name="StandbyReplicasInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicasInput"></a>

```csharp
public string StandbyReplicasInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionGroupCapacityLimits <a name="OpensearchserverlessCollectionGroupCapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessCollectionGroupCapacityLimits {
    double MaxIndexingCapacityInOcu = null,
    double MaxSearchCapacityInOcu = null,
    double MinIndexingCapacityInOcu = null,
    double MinSearchCapacityInOcu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu">MaxIndexingCapacityInOcu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu">MaxSearchCapacityInOcu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu">MinIndexingCapacityInOcu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu">MinSearchCapacityInOcu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}. |

---

##### `MaxIndexingCapacityInOcu`<sup>Optional</sup> <a name="MaxIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxIndexingCapacityInOcu"></a>

```csharp
public double MaxIndexingCapacityInOcu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#max_indexing_capacity_in_ocu}.

---

##### `MaxSearchCapacityInOcu`<sup>Optional</sup> <a name="MaxSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.maxSearchCapacityInOcu"></a>

```csharp
public double MaxSearchCapacityInOcu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu OpensearchserverlessCollectionGroup#max_search_capacity_in_ocu}.

---

##### `MinIndexingCapacityInOcu`<sup>Optional</sup> <a name="MinIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minIndexingCapacityInOcu"></a>

```csharp
public double MinIndexingCapacityInOcu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu OpensearchserverlessCollectionGroup#min_indexing_capacity_in_ocu}.

---

##### `MinSearchCapacityInOcu`<sup>Optional</sup> <a name="MinSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits.property.minSearchCapacityInOcu"></a>

```csharp
public double MinSearchCapacityInOcu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu OpensearchserverlessCollectionGroup#min_search_capacity_in_ocu}.

---

### OpensearchserverlessCollectionGroupConfig <a name="OpensearchserverlessCollectionGroupConfig" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessCollectionGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string StandbyReplicas,
    IResolvable|OpensearchserverlessCollectionGroupCapacityLimits[] CapacityLimits = null,
    string Description = null,
    string Generation = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits">CapacityLimits</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description">Description</a></code> | <code>string</code> | Description of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.generation">Generation</a></code> | <code>string</code> | Generation of the collection group. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#name OpensearchserverlessCollectionGroup#name}

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; set; }
```

- *Type:* string

Indicates whether standby replicas should be used for collections in this group. One of `ENABLED` or `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#standby_replicas OpensearchserverlessCollectionGroup#standby_replicas}

---

##### `CapacityLimits`<sup>Optional</sup> <a name="CapacityLimits" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.capacityLimits"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionGroupCapacityLimits[] CapacityLimits { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#capacity_limits OpensearchserverlessCollectionGroup#capacity_limits}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#description OpensearchserverlessCollectionGroup#description}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.generation"></a>

```csharp
public string Generation { get; set; }
```

- *Type:* string

Generation of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#generation OpensearchserverlessCollectionGroup#generation}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#region OpensearchserverlessCollectionGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_collection_group#tags OpensearchserverlessCollectionGroup#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionGroupCapacityLimitsList <a name="OpensearchserverlessCollectionGroupCapacityLimitsList" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessCollectionGroupCapacityLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get"></a>

```csharp
private OpensearchserverlessCollectionGroupCapacityLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsList.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionGroupCapacityLimits[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>[]

---


### OpensearchserverlessCollectionGroupCapacityLimitsOutputReference <a name="OpensearchserverlessCollectionGroupCapacityLimitsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OpensearchserverlessCollectionGroupCapacityLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu">ResetMaxIndexingCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu">ResetMaxSearchCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu">ResetMinIndexingCapacityInOcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu">ResetMinSearchCapacityInOcu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIndexingCapacityInOcu` <a name="ResetMaxIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxIndexingCapacityInOcu"></a>

```csharp
private void ResetMaxIndexingCapacityInOcu()
```

##### `ResetMaxSearchCapacityInOcu` <a name="ResetMaxSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMaxSearchCapacityInOcu"></a>

```csharp
private void ResetMaxSearchCapacityInOcu()
```

##### `ResetMinIndexingCapacityInOcu` <a name="ResetMinIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinIndexingCapacityInOcu"></a>

```csharp
private void ResetMinIndexingCapacityInOcu()
```

##### `ResetMinSearchCapacityInOcu` <a name="ResetMinSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resetMinSearchCapacityInOcu"></a>

```csharp
private void ResetMinSearchCapacityInOcu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput">MaxIndexingCapacityInOcuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput">MaxSearchCapacityInOcuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput">MinIndexingCapacityInOcuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput">MinSearchCapacityInOcuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">MaxIndexingCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">MaxSearchCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">MinIndexingCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu">MinSearchCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxIndexingCapacityInOcuInput`<sup>Optional</sup> <a name="MaxIndexingCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcuInput"></a>

```csharp
public double MaxIndexingCapacityInOcuInput { get; }
```

- *Type:* double

---

##### `MaxSearchCapacityInOcuInput`<sup>Optional</sup> <a name="MaxSearchCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcuInput"></a>

```csharp
public double MaxSearchCapacityInOcuInput { get; }
```

- *Type:* double

---

##### `MinIndexingCapacityInOcuInput`<sup>Optional</sup> <a name="MinIndexingCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcuInput"></a>

```csharp
public double MinIndexingCapacityInOcuInput { get; }
```

- *Type:* double

---

##### `MinSearchCapacityInOcuInput`<sup>Optional</sup> <a name="MinSearchCapacityInOcuInput" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcuInput"></a>

```csharp
public double MinSearchCapacityInOcuInput { get; }
```

- *Type:* double

---

##### `MaxIndexingCapacityInOcu`<sup>Required</sup> <a name="MaxIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```csharp
public double MaxIndexingCapacityInOcu { get; }
```

- *Type:* double

---

##### `MaxSearchCapacityInOcu`<sup>Required</sup> <a name="MaxSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```csharp
public double MaxSearchCapacityInOcu { get; }
```

- *Type:* double

---

##### `MinIndexingCapacityInOcu`<sup>Required</sup> <a name="MinIndexingCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```csharp
public double MinIndexingCapacityInOcu { get; }
```

- *Type:* double

---

##### `MinSearchCapacityInOcu`<sup>Required</sup> <a name="MinSearchCapacityInOcu" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```csharp
public double MinSearchCapacityInOcu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchserverlessCollectionGroupCapacityLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.opensearchserverlessCollectionGroup.OpensearchserverlessCollectionGroupCapacityLimits">OpensearchserverlessCollectionGroupCapacityLimits</a>

---



