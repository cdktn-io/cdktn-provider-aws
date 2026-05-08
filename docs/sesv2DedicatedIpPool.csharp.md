# `sesv2DedicatedIpPool` Submodule <a name="`sesv2DedicatedIpPool` Submodule" id="@cdktn/provider-aws.sesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2DedicatedIpPool <a name="Sesv2DedicatedIpPool" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2DedicatedIpPool(Construct Scope, string Id, Sesv2DedicatedIpPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig">Sesv2DedicatedIpPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode">ResetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetScalingMode"></a>

```csharp
private void ResetScalingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Sesv2DedicatedIpPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2DedicatedIpPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2DedicatedIpPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2DedicatedIpPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2DedicatedIpPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Sesv2DedicatedIpPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2DedicatedIpPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2DedicatedIpPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2DedicatedIpPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput">PoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput">ScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode">ScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolNameInput"></a>

```csharp
public string PoolNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingModeInput"></a>

```csharp
public string ScalingModeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.scalingMode"></a>

```csharp
public string ScalingMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2DedicatedIpPoolConfig <a name="Sesv2DedicatedIpPoolConfig" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2DedicatedIpPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PoolName,
    string Id = null,
    string Region = null,
    string ScalingMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName">PoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode">ScalingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.poolName"></a>

```csharp
public string PoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#region Sesv2DedicatedIpPool#region}

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.scalingMode"></a>

```csharp
public string ScalingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.sesv2DedicatedIpPool.Sesv2DedicatedIpPoolConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}.

---



