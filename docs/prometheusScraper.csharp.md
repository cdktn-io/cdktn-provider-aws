# `prometheusScraper` Submodule <a name="`prometheusScraper` Submodule" id="@cdktn/provider-aws.prometheusScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraper <a name="PrometheusScraper" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper aws_prometheus_scraper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraper(Construct Scope, string Id, PrometheusScraperConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig">PrometheusScraperConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig">PrometheusScraperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putRoleConfiguration">PutRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRoleConfiguration">ResetRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putDestination"></a>

```csharp
private void PutDestination(IResolvable|PrometheusScraperDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putDestination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

---

##### `PutRoleConfiguration` <a name="PutRoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putRoleConfiguration"></a>

```csharp
private void PutRoleConfiguration(IResolvable|PrometheusScraperRoleConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putRoleConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putSource"></a>

```csharp
private void PutSource(IResolvable|PrometheusScraperSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts"></a>

```csharp
private void PutTimeouts(PrometheusScraperTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleConfiguration` <a name="ResetRoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRoleConfiguration"></a>

```csharp
private void ResetRoleConfiguration()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusScraper resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusScraper.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusScraper.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusScraper.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusScraper.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PrometheusScraper resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusScraper to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList">PrometheusScraperDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfiguration">RoleConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList">PrometheusScraperRoleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.source">Source</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList">PrometheusScraperSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference">PrometheusScraperTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destinationInput">DestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfigurationInput">RoleConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfigurationInput">ScrapeConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfiguration">ScrapeConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destination"></a>

```csharp
public PrometheusScraperDestinationList Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList">PrometheusScraperDestinationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleConfiguration`<sup>Required</sup> <a name="RoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfiguration"></a>

```csharp
public PrometheusScraperRoleConfigurationList RoleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList">PrometheusScraperRoleConfigurationList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.source"></a>

```csharp
public PrometheusScraperSourceList Source { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList">PrometheusScraperSourceList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeouts"></a>

```csharp
public PrometheusScraperTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference">PrometheusScraperTimeoutsOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destinationInput"></a>

```csharp
public IResolvable|PrometheusScraperDestination[] DestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleConfigurationInput`<sup>Optional</sup> <a name="RoleConfigurationInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfigurationInput"></a>

```csharp
public IResolvable|PrometheusScraperRoleConfiguration[] RoleConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]

---

##### `ScrapeConfigurationInput`<sup>Optional</sup> <a name="ScrapeConfigurationInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfigurationInput"></a>

```csharp
public string ScrapeConfigurationInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.sourceInput"></a>

```csharp
public IResolvable|PrometheusScraperSource[] SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeoutsInput"></a>

```csharp
public IResolvable|PrometheusScraperTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScrapeConfiguration`<sup>Required</sup> <a name="ScrapeConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfiguration"></a>

```csharp
public string ScrapeConfiguration { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperConfig <a name="PrometheusScraperConfig" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ScrapeConfiguration,
    string Alias = null,
    IResolvable|PrometheusScraperDestination[] Destination = null,
    string Region = null,
    IResolvable|PrometheusScraperRoleConfiguration[] RoleConfiguration = null,
    IResolvable|PrometheusScraperSource[] Source = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PrometheusScraperTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.scrapeConfiguration">ScrapeConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.destination">Destination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.roleConfiguration">RoleConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]</code> | role_configuration block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.source">Source</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]</code> | source block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ScrapeConfiguration`<sup>Required</sup> <a name="ScrapeConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.scrapeConfiguration"></a>

```csharp
public string ScrapeConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}.

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.destination"></a>

```csharp
public IResolvable|PrometheusScraperDestination[] Destination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#destination PrometheusScraper#destination}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#region PrometheusScraper#region}

---

##### `RoleConfiguration`<sup>Optional</sup> <a name="RoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.roleConfiguration"></a>

```csharp
public IResolvable|PrometheusScraperRoleConfiguration[] RoleConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]

role_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#role_configuration PrometheusScraper#role_configuration}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.source"></a>

```csharp
public IResolvable|PrometheusScraperSource[] Source { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#source PrometheusScraper#source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.timeouts"></a>

```csharp
public PrometheusScraperTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#timeouts PrometheusScraper#timeouts}

---

### PrometheusScraperDestination <a name="PrometheusScraperDestination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperDestination {
    IResolvable|PrometheusScraperDestinationAmp[] Amp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination.property.amp">Amp</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]</code> | amp block. |

---

##### `Amp`<sup>Optional</sup> <a name="Amp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination.property.amp"></a>

```csharp
public IResolvable|PrometheusScraperDestinationAmp[] Amp { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

amp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#amp PrometheusScraper#amp}

---

### PrometheusScraperDestinationAmp <a name="PrometheusScraperDestinationAmp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperDestinationAmp {
    string WorkspaceArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.property.workspaceArn">WorkspaceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}. |

---

##### `WorkspaceArn`<sup>Required</sup> <a name="WorkspaceArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.property.workspaceArn"></a>

```csharp
public string WorkspaceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}.

---

### PrometheusScraperRoleConfiguration <a name="PrometheusScraperRoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperRoleConfiguration {
    string SourceRoleArn = null,
    string TargetRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#source_role_arn PrometheusScraper#source_role_arn}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#target_role_arn PrometheusScraper#target_role_arn}. |

---

##### `SourceRoleArn`<sup>Optional</sup> <a name="SourceRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#source_role_arn PrometheusScraper#source_role_arn}.

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#target_role_arn PrometheusScraper#target_role_arn}.

---

### PrometheusScraperSource <a name="PrometheusScraperSource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSource {
    IResolvable|PrometheusScraperSourceEks[] Eks = null,
    IResolvable|PrometheusScraperSourceVpc[] Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.eks">Eks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]</code> | eks block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.vpc">Vpc</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]</code> | vpc block. |

---

##### `Eks`<sup>Optional</sup> <a name="Eks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.eks"></a>

```csharp
public IResolvable|PrometheusScraperSourceEks[] Eks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

eks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#eks PrometheusScraper#eks}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.vpc"></a>

```csharp
public IResolvable|PrometheusScraperSourceVpc[] Vpc { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#vpc PrometheusScraper#vpc}

---

### PrometheusScraperSourceEks <a name="PrometheusScraperSourceEks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceEks {
    string ClusterArn,
    string[] SubnetIds,
    string[] SecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}. |

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}.

---

### PrometheusScraperSourceVpc <a name="PrometheusScraperSourceVpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceVpc {
    string[] SecurityGroupIds,
    string[] SubnetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}.

---

### PrometheusScraperTimeouts <a name="PrometheusScraperTimeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#create PrometheusScraper#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#delete PrometheusScraper#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper#update PrometheusScraper#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperDestinationAmpList <a name="PrometheusScraperDestinationAmpList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperDestinationAmpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get"></a>

```csharp
private PrometheusScraperDestinationAmpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperDestinationAmp[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

---


### PrometheusScraperDestinationAmpOutputReference <a name="PrometheusScraperDestinationAmpOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperDestinationAmpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArnInput">WorkspaceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArn">WorkspaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceArnInput`<sup>Optional</sup> <a name="WorkspaceArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArnInput"></a>

```csharp
public string WorkspaceArnInput { get; }
```

- *Type:* string

---

##### `WorkspaceArn`<sup>Required</sup> <a name="WorkspaceArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArn"></a>

```csharp
public string WorkspaceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperDestinationAmp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>

---


### PrometheusScraperDestinationList <a name="PrometheusScraperDestinationList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get"></a>

```csharp
private PrometheusScraperDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperDestination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>[]

---


### PrometheusScraperDestinationOutputReference <a name="PrometheusScraperDestinationOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp">PutAmp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resetAmp">ResetAmp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmp` <a name="PutAmp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp"></a>

```csharp
private void PutAmp(IResolvable|PrometheusScraperDestinationAmp[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

---

##### `ResetAmp` <a name="ResetAmp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resetAmp"></a>

```csharp
private void ResetAmp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.amp">Amp</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList">PrometheusScraperDestinationAmpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.ampInput">AmpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amp`<sup>Required</sup> <a name="Amp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.amp"></a>

```csharp
public PrometheusScraperDestinationAmpList Amp { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList">PrometheusScraperDestinationAmpList</a>

---

##### `AmpInput`<sup>Optional</sup> <a name="AmpInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.ampInput"></a>

```csharp
public IResolvable|PrometheusScraperDestinationAmp[] AmpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>

---


### PrometheusScraperRoleConfigurationList <a name="PrometheusScraperRoleConfigurationList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperRoleConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.get"></a>

```csharp
private PrometheusScraperRoleConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperRoleConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>[]

---


### PrometheusScraperRoleConfigurationOutputReference <a name="PrometheusScraperRoleConfigurationOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperRoleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetSourceRoleArn">ResetSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceRoleArn` <a name="ResetSourceRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetSourceRoleArn"></a>

```csharp
private void ResetSourceRoleArn()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetTargetRoleArn"></a>

```csharp
private void ResetTargetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArnInput">SourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceRoleArnInput`<sup>Optional</sup> <a name="SourceRoleArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArnInput"></a>

```csharp
public string SourceRoleArnInput { get; }
```

- *Type:* string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArnInput"></a>

```csharp
public string TargetRoleArnInput { get; }
```

- *Type:* string

---

##### `SourceRoleArn`<sup>Required</sup> <a name="SourceRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; }
```

- *Type:* string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperRoleConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>

---


### PrometheusScraperSourceEksList <a name="PrometheusScraperSourceEksList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceEksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get"></a>

```csharp
private PrometheusScraperSourceEksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperSourceEks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

---


### PrometheusScraperSourceEksOutputReference <a name="PrometheusScraperSourceEksOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceEksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperSourceEks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>

---


### PrometheusScraperSourceList <a name="PrometheusScraperSourceList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.get"></a>

```csharp
private PrometheusScraperSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>[]

---


### PrometheusScraperSourceOutputReference <a name="PrometheusScraperSourceOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks">PutEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetEks">ResetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEks` <a name="PutEks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks"></a>

```csharp
private void PutEks(IResolvable|PrometheusScraperSourceEks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putVpc"></a>

```csharp
private void PutVpc(IResolvable|PrometheusScraperSourceVpc[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putVpc.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]

---

##### `ResetEks` <a name="ResetEks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetEks"></a>

```csharp
private void ResetEks()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetVpc"></a>

```csharp
private void ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList">PrometheusScraperSourceEksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList">PrometheusScraperSourceVpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eksInput">EksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpcInput">VpcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eks`<sup>Required</sup> <a name="Eks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eks"></a>

```csharp
public PrometheusScraperSourceEksList Eks { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList">PrometheusScraperSourceEksList</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpc"></a>

```csharp
public PrometheusScraperSourceVpcList Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList">PrometheusScraperSourceVpcList</a>

---

##### `EksInput`<sup>Optional</sup> <a name="EksInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eksInput"></a>

```csharp
public IResolvable|PrometheusScraperSourceEks[] EksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>[]

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpcInput"></a>

```csharp
public IResolvable|PrometheusScraperSourceVpc[] VpcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>

---


### PrometheusScraperSourceVpcList <a name="PrometheusScraperSourceVpcList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceVpcList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.get"></a>

```csharp
private PrometheusScraperSourceVpcOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperSourceVpc[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>[]

---


### PrometheusScraperSourceVpcOutputReference <a name="PrometheusScraperSourceVpcOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperSourceVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperSourceVpc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>

---


### PrometheusScraperTimeoutsOutputReference <a name="PrometheusScraperTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusScraperTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusScraperTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---



