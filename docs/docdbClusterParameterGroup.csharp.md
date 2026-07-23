# `docdbClusterParameterGroup` Submodule <a name="`docdbClusterParameterGroup` Submodule" id="@cdktn/provider-aws.docdbClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbClusterParameterGroup <a name="DocdbClusterParameterGroup" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group aws_docdb_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterParameterGroup(Construct Scope, string Id, DocdbClusterParameterGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig">DocdbClusterParameterGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig">DocdbClusterParameterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.putParameter"></a>

```csharp
private void PutParameter(IResolvable|DocdbClusterParameterGroupParameter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.putParameter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterParameterGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterParameterGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterParameterGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterParameterGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DocdbClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbClusterParameterGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DocdbClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameter">Parameter</a></code> | <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList">DocdbClusterParameterGroupParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameterInput">ParameterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameter"></a>

```csharp
public DocdbClusterParameterGroupParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList">DocdbClusterParameterGroupParameterList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameterInput"></a>

```csharp
public IResolvable|DocdbClusterParameterGroupParameter[] ParameterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterParameterGroupConfig <a name="DocdbClusterParameterGroupConfig" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterParameterGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Family,
    string Description = null,
    string Id = null,
    string Name = null,
    string NamePrefix = null,
    IResolvable|DocdbClusterParameterGroupParameter[] Parameter = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.family">Family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.parameter">Parameter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.parameter"></a>

```csharp
public IResolvable|DocdbClusterParameterGroupParameter[] Parameter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#parameter DocdbClusterParameterGroup#parameter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#region DocdbClusterParameterGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}.

---

### DocdbClusterParameterGroupParameter <a name="DocdbClusterParameterGroupParameter" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterParameterGroupParameter {
    string Name,
    string Value,
    string ApplyMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#value DocdbClusterParameterGroup#value}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.applyMethod">ApplyMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#apply_method DocdbClusterParameterGroup#apply_method}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#value DocdbClusterParameterGroup#value}.

---

##### `ApplyMethod`<sup>Optional</sup> <a name="ApplyMethod" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.applyMethod"></a>

```csharp
public string ApplyMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/docdb_cluster_parameter_group#apply_method DocdbClusterParameterGroup#apply_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterParameterGroupParameterList <a name="DocdbClusterParameterGroupParameterList" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterParameterGroupParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.get"></a>

```csharp
private DocdbClusterParameterGroupParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.internalValue"></a>

```csharp
public IResolvable|DocdbClusterParameterGroupParameter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>[]

---


### DocdbClusterParameterGroupParameterOutputReference <a name="DocdbClusterParameterGroupParameterOutputReference" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterParameterGroupParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resetApplyMethod">ResetApplyMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyMethod` <a name="ResetApplyMethod" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resetApplyMethod"></a>

```csharp
private void ResetApplyMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethodInput">ApplyMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethod">ApplyMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyMethodInput`<sup>Optional</sup> <a name="ApplyMethodInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethodInput"></a>

```csharp
public string ApplyMethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ApplyMethod`<sup>Required</sup> <a name="ApplyMethod" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethod"></a>

```csharp
public string ApplyMethod { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DocdbClusterParameterGroupParameter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>

---



