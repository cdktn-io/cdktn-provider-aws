# `redshiftUsageLimit` Submodule <a name="`redshiftUsageLimit` Submodule" id="@cdktn/provider-aws.redshiftUsageLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftUsageLimit <a name="RedshiftUsageLimit" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit aws_redshift_usage_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftUsageLimit(Construct Scope, string Id, RedshiftUsageLimitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig">RedshiftUsageLimitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig">RedshiftUsageLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction">ResetBreachAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBreachAction` <a name="ResetBreachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction"></a>

```csharp
private void ResetBreachAction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftUsageLimit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftUsageLimit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftUsageLimit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftUsageLimit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftUsageLimit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftUsageLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftUsageLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput">BreachActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput">FeatureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput">LimitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction">BreachAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureType">FeatureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitType">LimitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `BreachActionInput`<sup>Optional</sup> <a name="BreachActionInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput"></a>

```csharp
public string BreachActionInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput"></a>

```csharp
public string FeatureTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitTypeInput`<sup>Optional</sup> <a name="LimitTypeInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput"></a>

```csharp
public string LimitTypeInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `BreachAction`<sup>Required</sup> <a name="BreachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction"></a>

```csharp
public string BreachAction { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureType"></a>

```csharp
public string FeatureType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitType"></a>

```csharp
public string LimitType { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftUsageLimitConfig <a name="RedshiftUsageLimitConfig" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftUsageLimitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double Amount,
    string ClusterIdentifier,
    string FeatureType,
    string LimitType,
    string BreachAction = null,
    string Id = null,
    string Period = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType">FeatureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType">LimitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction">BreachAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period">Period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}. |
| <code><a href="#@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}.

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}.

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType"></a>

```csharp
public string FeatureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}.

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType"></a>

```csharp
public string LimitType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}.

---

##### `BreachAction`<sup>Optional</sup> <a name="BreachAction" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction"></a>

```csharp
public string BreachAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#region RedshiftUsageLimit#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}.

---



