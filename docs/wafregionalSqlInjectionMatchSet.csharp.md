# `wafregionalSqlInjectionMatchSet` Submodule <a name="`wafregionalSqlInjectionMatchSet` Submodule" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalSqlInjectionMatchSet <a name="WafregionalSqlInjectionMatchSet" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSet(Construct Scope, string Id, WafregionalSqlInjectionMatchSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig">WafregionalSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig">WafregionalSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple">PutSqlInjectionMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetSqlInjectionMatchTuple">ResetSqlInjectionMatchTuple</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSqlInjectionMatchTuple` <a name="PutSqlInjectionMatchTuple" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple"></a>

```csharp
private void PutSqlInjectionMatchTuple(IResolvable|WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSqlInjectionMatchTuple` <a name="ResetSqlInjectionMatchTuple" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetSqlInjectionMatchTuple"></a>

```csharp
private void ResetSqlInjectionMatchTuple()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WafregionalSqlInjectionMatchSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafregionalSqlInjectionMatchSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafregionalSqlInjectionMatchSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafregionalSqlInjectionMatchSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafregionalSqlInjectionMatchSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WafregionalSqlInjectionMatchSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafregionalSqlInjectionMatchSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafregionalSqlInjectionMatchSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WafregionalSqlInjectionMatchSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTuple">SqlInjectionMatchTuple</a></code> | <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTupleInput">SqlInjectionMatchTupleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SqlInjectionMatchTuple`<sup>Required</sup> <a name="SqlInjectionMatchTuple" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTuple"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList SqlInjectionMatchTuple { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SqlInjectionMatchTupleInput`<sup>Optional</sup> <a name="SqlInjectionMatchTupleInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTupleInput"></a>

```csharp
public IResolvable|WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] SqlInjectionMatchTupleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalSqlInjectionMatchSetConfig <a name="WafregionalSqlInjectionMatchSetConfig" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null,
    IResolvable|WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] SqlInjectionMatchTuple = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuple">SqlInjectionMatchTuple</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]</code> | sql_injection_match_tuple block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#region WafregionalSqlInjectionMatchSet#region}

---

##### `SqlInjectionMatchTuple`<sup>Optional</sup> <a name="SqlInjectionMatchTuple" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuple"></a>

```csharp
public IResolvable|WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] SqlInjectionMatchTuple { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

sql_injection_match_tuple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}

---

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
    WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch FieldToMatch,
    string TextTransformation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.textTransformation">TextTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.fieldToMatch"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch FieldToMatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.textTransformation"></a>

```csharp
public string TextTransformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}.

---

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
    string Type,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---


### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get"></a>

```csharp
private WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.internalValue"></a>

```csharp
public IResolvable|WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>[]

---


### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch"></a>

```csharp
private void PutFieldToMatch(WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformation">TextTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatch"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference FieldToMatch { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatchInput"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch FieldToMatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformationInput"></a>

```csharp
public string TextTransformationInput { get; }
```

- *Type:* string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformation"></a>

```csharp
public string TextTransformation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple">WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple</a>

---



