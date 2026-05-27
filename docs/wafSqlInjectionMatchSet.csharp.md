# `wafSqlInjectionMatchSet` Submodule <a name="`wafSqlInjectionMatchSet` Submodule" id="@cdktn/provider-aws.wafSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSqlInjectionMatchSet <a name="WafSqlInjectionMatchSet" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set aws_waf_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSet(Construct Scope, string Id, WafSqlInjectionMatchSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples">PutSqlInjectionMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples">ResetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSqlInjectionMatchTuples` <a name="PutSqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples"></a>

```csharp
private void PutSqlInjectionMatchTuples(IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSqlInjectionMatchTuples` <a name="ResetSqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples"></a>

```csharp
private void ResetSqlInjectionMatchTuples()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WafSqlInjectionMatchSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafSqlInjectionMatchSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafSqlInjectionMatchSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafSqlInjectionMatchSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

WafSqlInjectionMatchSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WafSqlInjectionMatchSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafSqlInjectionMatchSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafSqlInjectionMatchSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WafSqlInjectionMatchSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples">SqlInjectionMatchTuples</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput">SqlInjectionMatchTuplesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `SqlInjectionMatchTuples`<sup>Required</sup> <a name="SqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesList SqlInjectionMatchTuples { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SqlInjectionMatchTuplesInput`<sup>Optional</sup> <a name="SqlInjectionMatchTuplesInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput"></a>

```csharp
public IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples[] SqlInjectionMatchTuplesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafSqlInjectionMatchSetConfig <a name="WafSqlInjectionMatchSetConfig" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples[] SqlInjectionMatchTuples = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples">SqlInjectionMatchTuples</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]</code> | sql_injection_match_tuples block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlInjectionMatchTuples`<sup>Optional</sup> <a name="SqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples"></a>

```csharp
public IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples[] SqlInjectionMatchTuples { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

sql_injection_match_tuples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuples <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuples" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuples {
    WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch FieldToMatch,
    string TextTransformation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation">TextTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch FieldToMatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#field_to_match WafSqlInjectionMatchSet#field_to_match}

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation"></a>

```csharp
public string TextTransformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}.

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
    string Type,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesList <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesList" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get"></a>

```csharp
private WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue"></a>

```csharp
public IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch"></a>

```csharp
private void PutFieldToMatch(WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation">TextTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference FieldToMatch { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch FieldToMatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput"></a>

```csharp
public string TextTransformationInput { get; }
```

- *Type:* string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation"></a>

```csharp
public string TextTransformation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WafSqlInjectionMatchSetSqlInjectionMatchTuples InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>

---



