# `wafRateBasedRule` Submodule <a name="`wafRateBasedRule` Submodule" id="@cdktn/provider-aws.wafRateBasedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafRateBasedRule <a name="WafRateBasedRule" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule aws_waf_rate_based_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafRateBasedRule(Construct Scope, string Id, WafRateBasedRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig">WafRateBasedRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig">WafRateBasedRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.putPredicates">PutPredicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetPredicates">ResetPredicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPredicates` <a name="PutPredicates" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.putPredicates"></a>

```csharp
private void PutPredicates(IResolvable|WafRateBasedRulePredicates[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.putPredicates.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPredicates` <a name="ResetPredicates" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetPredicates"></a>

```csharp
private void ResetPredicates()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WafRateBasedRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafRateBasedRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafRateBasedRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafRateBasedRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafRateBasedRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WafRateBasedRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafRateBasedRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafRateBasedRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WafRateBasedRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicates">Predicates</a></code> | <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList">WafRateBasedRulePredicatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicatesInput">PredicatesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKeyInput">RateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKey">RateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Predicates`<sup>Required</sup> <a name="Predicates" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicates"></a>

```csharp
public WafRateBasedRulePredicatesList Predicates { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList">WafRateBasedRulePredicatesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PredicatesInput`<sup>Optional</sup> <a name="PredicatesInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicatesInput"></a>

```csharp
public IResolvable|WafRateBasedRulePredicates[] PredicatesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

---

##### `RateKeyInput`<sup>Optional</sup> <a name="RateKeyInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKeyInput"></a>

```csharp
public string RateKeyInput { get; }
```

- *Type:* string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RateKey`<sup>Required</sup> <a name="RateKey" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKey"></a>

```csharp
public string RateKey { get; }
```

- *Type:* string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafRateBasedRuleConfig <a name="WafRateBasedRuleConfig" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafRateBasedRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MetricName,
    string Name,
    string RateKey,
    double RateLimit,
    string Id = null,
    IResolvable|WafRateBasedRulePredicates[] Predicates = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#name WafRateBasedRule#name}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateKey">RateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#id WafRateBasedRule#id}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.predicates">Predicates</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]</code> | predicates block. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#tags WafRateBasedRule#tags}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#name WafRateBasedRule#name}.

---

##### `RateKey`<sup>Required</sup> <a name="RateKey" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateKey"></a>

```csharp
public string RateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}.

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#id WafRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Predicates`<sup>Optional</sup> <a name="Predicates" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.predicates"></a>

```csharp
public IResolvable|WafRateBasedRulePredicates[] Predicates { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

predicates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#predicates WafRateBasedRule#predicates}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#tags WafRateBasedRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}.

---

### WafRateBasedRulePredicates <a name="WafRateBasedRulePredicates" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafRateBasedRulePredicates {
    string DataId,
    bool|IResolvable Negated,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.dataId">DataId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#data_id WafRateBasedRule#data_id}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.negated">Negated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#negated WafRateBasedRule#negated}. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#type WafRateBasedRule#type}. |

---

##### `DataId`<sup>Required</sup> <a name="DataId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.dataId"></a>

```csharp
public string DataId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#data_id WafRateBasedRule#data_id}.

---

##### `Negated`<sup>Required</sup> <a name="Negated" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.negated"></a>

```csharp
public bool|IResolvable Negated { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#negated WafRateBasedRule#negated}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/waf_rate_based_rule#type WafRateBasedRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafRateBasedRulePredicatesList <a name="WafRateBasedRulePredicatesList" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafRateBasedRulePredicatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.get"></a>

```csharp
private WafRateBasedRulePredicatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.internalValue"></a>

```csharp
public IResolvable|WafRateBasedRulePredicates[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

---


### WafRateBasedRulePredicatesOutputReference <a name="WafRateBasedRulePredicatesOutputReference" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafRateBasedRulePredicatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataIdInput">DataIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negatedInput">NegatedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataId">DataId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negated">Negated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataIdInput`<sup>Optional</sup> <a name="DataIdInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataIdInput"></a>

```csharp
public string DataIdInput { get; }
```

- *Type:* string

---

##### `NegatedInput`<sup>Optional</sup> <a name="NegatedInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negatedInput"></a>

```csharp
public bool|IResolvable NegatedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DataId`<sup>Required</sup> <a name="DataId" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataId"></a>

```csharp
public string DataId { get; }
```

- *Type:* string

---

##### `Negated`<sup>Required</sup> <a name="Negated" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negated"></a>

```csharp
public bool|IResolvable Negated { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WafRateBasedRulePredicates InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>

---



