# `accessanalyzerArchiveRule` Submodule <a name="`accessanalyzerArchiveRule` Submodule" id="@cdktn/provider-aws.accessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerArchiveRule <a name="AccessanalyzerArchiveRule" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule aws_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccessanalyzerArchiveRule(Construct Scope, string Id, AccessanalyzerArchiveRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig">AccessanalyzerArchiveRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig">AccessanalyzerArchiveRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter"></a>

```csharp
private void PutFilter(IResolvable|AccessanalyzerArchiveRuleFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccessanalyzerArchiveRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccessanalyzerArchiveRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccessanalyzerArchiveRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AccessanalyzerArchiveRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessanalyzerArchiveRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessanalyzerArchiveRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AccessanalyzerArchiveRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList">AccessanalyzerArchiveRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput">AnalyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName">AnalyzerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter"></a>

```csharp
public AccessanalyzerArchiveRuleFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList">AccessanalyzerArchiveRuleFilterList</a>

---

##### `AnalyzerNameInput`<sup>Optional</sup> <a name="AnalyzerNameInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput"></a>

```csharp
public string AnalyzerNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput"></a>

```csharp
public IResolvable|AccessanalyzerArchiveRuleFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName"></a>

```csharp
public string AnalyzerName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerArchiveRuleConfig <a name="AccessanalyzerArchiveRuleConfig" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccessanalyzerArchiveRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AnalyzerName,
    IResolvable|AccessanalyzerArchiveRuleFilter[] Filter,
    string RuleName,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName">AnalyzerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName"></a>

```csharp
public string AnalyzerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}.

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter"></a>

```csharp
public IResolvable|AccessanalyzerArchiveRuleFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#region AccessanalyzerArchiveRule#region}

---

### AccessanalyzerArchiveRuleFilter <a name="AccessanalyzerArchiveRuleFilter" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccessanalyzerArchiveRuleFilter {
    string Criteria,
    string[] Contains = null,
    string[] Eq = null,
    string Exists = null,
    string[] Neq = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.criteria">Criteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#criteria AccessanalyzerArchiveRule#criteria}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains">Contains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq">Eq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists">Exists</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq">Neq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.criteria"></a>

```csharp
public string Criteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#criteria AccessanalyzerArchiveRule#criteria}.

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains"></a>

```csharp
public string[] Contains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}.

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq"></a>

```csharp
public string[] Eq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}.

---

##### `Exists`<sup>Optional</sup> <a name="Exists" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists"></a>

```csharp
public string Exists { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}.

---

##### `Neq`<sup>Optional</sup> <a name="Neq" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq"></a>

```csharp
public string[] Neq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerArchiveRuleFilterList <a name="AccessanalyzerArchiveRuleFilterList" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccessanalyzerArchiveRuleFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.get"></a>

```csharp
private AccessanalyzerArchiveRuleFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterList.property.internalValue"></a>

```csharp
public IResolvable|AccessanalyzerArchiveRuleFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>[]

---


### AccessanalyzerArchiveRuleFilterOutputReference <a name="AccessanalyzerArchiveRuleFilterOutputReference" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AccessanalyzerArchiveRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists">ResetExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq">ResetNeq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains"></a>

```csharp
private void ResetContains()
```

##### `ResetEq` <a name="ResetEq" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq"></a>

```csharp
private void ResetEq()
```

##### `ResetExists` <a name="ResetExists" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists"></a>

```csharp
private void ResetExists()
```

##### `ResetNeq` <a name="ResetNeq" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq"></a>

```csharp
private void ResetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput">ContainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput">EqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput">ExistsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput">NeqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains">Contains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteria">Criteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq">Eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists">Exists</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq">Neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput"></a>

```csharp
public string[] ContainsInput { get; }
```

- *Type:* string[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteriaInput"></a>

```csharp
public string CriteriaInput { get; }
```

- *Type:* string

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput"></a>

```csharp
public string[] EqInput { get; }
```

- *Type:* string[]

---

##### `ExistsInput`<sup>Optional</sup> <a name="ExistsInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput"></a>

```csharp
public string ExistsInput { get; }
```

- *Type:* string

---

##### `NeqInput`<sup>Optional</sup> <a name="NeqInput" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput"></a>

```csharp
public string[] NeqInput { get; }
```

- *Type:* string[]

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```csharp
public string[] Contains { get; }
```

- *Type:* string[]

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.criteria"></a>

```csharp
public string Criteria { get; }
```

- *Type:* string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```csharp
public string[] Eq { get; }
```

- *Type:* string[]

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```csharp
public string Exists { get; }
```

- *Type:* string

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```csharp
public string[] Neq { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccessanalyzerArchiveRuleFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>

---



