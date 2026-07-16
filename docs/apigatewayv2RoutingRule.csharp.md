# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-aws.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRule(Construct Scope, string Id, Apigatewayv2RoutingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction"></a>

```csharp
private void PutAction(IResolvable|Apigatewayv2RoutingRuleAction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition"></a>

```csharp
private void PutCondition(IResolvable|Apigatewayv2RoutingRuleCondition[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Apigatewayv2RoutingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Apigatewayv2RoutingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Apigatewayv2RoutingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Apigatewayv2RoutingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">RoutingRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">RoutingRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput">ConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action"></a>

```csharp
public Apigatewayv2RoutingRuleActionList Action { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition"></a>

```csharp
public Apigatewayv2RoutingRuleConditionList Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a>

---

##### `RoutingRuleArn`<sup>Required</sup> <a name="RoutingRuleArn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```csharp
public string RoutingRuleArn { get; }
```

- *Type:* string

---

##### `RoutingRuleId`<sup>Required</sup> <a name="RoutingRuleId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```csharp
public string RoutingRuleId { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleAction[] ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleCondition[] ConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleAction <a name="Apigatewayv2RoutingRuleAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleAction {
    IResolvable|Apigatewayv2RoutingRuleActionInvokeApi[] InvokeApi = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi">InvokeApi</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]</code> | invoke_api block. |

---

##### `InvokeApi`<sup>Optional</sup> <a name="InvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleActionInvokeApi[] InvokeApi { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

invoke_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionInvokeApi <a name="Apigatewayv2RoutingRuleActionInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleActionInvokeApi {
    string ApiId,
    string Stage,
    bool|IResolvable StripBasePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath">StripBasePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}. |

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}.

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}.

---

##### `StripBasePath`<sup>Optional</sup> <a name="StripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath"></a>

```csharp
public bool|IResolvable StripBasePath { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}.

---

### Apigatewayv2RoutingRuleCondition <a name="Apigatewayv2RoutingRuleCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleCondition {
    IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths[] MatchBasePaths = null,
    IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders[] MatchHeaders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths">MatchBasePaths</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]</code> | match_base_paths block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders">MatchHeaders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]</code> | match_headers block. |

---

##### `MatchBasePaths`<sup>Optional</sup> <a name="MatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths[] MatchBasePaths { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

match_base_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `MatchHeaders`<sup>Optional</sup> <a name="MatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders[] MatchHeaders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

match_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchBasePaths {
    string[] AnyOf
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf">AnyOf</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}. |

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf"></a>

```csharp
public string[] AnyOf { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}.

---

### Apigatewayv2RoutingRuleConditionMatchHeaders <a name="Apigatewayv2RoutingRuleConditionMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchHeaders {
    IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] AnyOf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf">AnyOf</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]</code> | any_of block. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] AnyOf { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf {
    string Header,
    string ValueGlob
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header">Header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob">ValueGlob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header"></a>

```csharp
public string Header { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}.

---

##### `ValueGlob`<sup>Required</sup> <a name="ValueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob"></a>

```csharp
public string ValueGlob { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}.

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    double Priority,
    IResolvable|Apigatewayv2RoutingRuleAction[] Action = null,
    IResolvable|Apigatewayv2RoutingRuleCondition[] Condition = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action">Action</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition">Condition</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleAction[] Action { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleCondition[] Condition { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionInvokeApiList <a name="Apigatewayv2RoutingRuleActionInvokeApiList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleActionInvokeApiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get"></a>

```csharp
private Apigatewayv2RoutingRuleActionInvokeApiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleActionInvokeApi[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

---


### Apigatewayv2RoutingRuleActionInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionInvokeApiOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleActionInvokeApiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath">ResetStripBasePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStripBasePath` <a name="ResetStripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath"></a>

```csharp
private void ResetStripBasePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput">StripBasePathInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath">StripBasePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `StripBasePathInput`<sup>Optional</sup> <a name="StripBasePathInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput"></a>

```csharp
public bool|IResolvable StripBasePathInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `StripBasePath`<sup>Required</sup> <a name="StripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath"></a>

```csharp
public bool|IResolvable StripBasePath { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleActionInvokeApi InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>

---


### Apigatewayv2RoutingRuleActionList <a name="Apigatewayv2RoutingRuleActionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get"></a>

```csharp
private Apigatewayv2RoutingRuleActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleAction[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>[]

---


### Apigatewayv2RoutingRuleActionOutputReference <a name="Apigatewayv2RoutingRuleActionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi">PutInvokeApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi">ResetInvokeApi</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvokeApi` <a name="PutInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi"></a>

```csharp
private void PutInvokeApi(IResolvable|Apigatewayv2RoutingRuleActionInvokeApi[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

---

##### `ResetInvokeApi` <a name="ResetInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi"></a>

```csharp
private void ResetInvokeApi()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi">InvokeApi</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput">InvokeApiInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvokeApi`<sup>Required</sup> <a name="InvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi"></a>

```csharp
public Apigatewayv2RoutingRuleActionInvokeApiList InvokeApi { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a>

---

##### `InvokeApiInput`<sup>Optional</sup> <a name="InvokeApiInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleActionInvokeApi[] InvokeApiInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>

---


### Apigatewayv2RoutingRuleConditionList <a name="Apigatewayv2RoutingRuleConditionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get"></a>

```csharp
private Apigatewayv2RoutingRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleCondition[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsList <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchBasePathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get"></a>

```csharp
private Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf">AnyOf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput"></a>

```csharp
public string[] AnyOfInput { get; }
```

- *Type:* string[]

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf"></a>

```csharp
public string[] AnyOf { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get"></a>

```csharp
private Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput">HeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput">ValueGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob">ValueGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```csharp
public string HeaderInput { get; }
```

- *Type:* string

---

##### `ValueGlobInput`<sup>Optional</sup> <a name="ValueGlobInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```csharp
public string ValueGlobInput { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `ValueGlob`<sup>Required</sup> <a name="ValueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```csharp
public string ValueGlob { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get"></a>

```csharp
private Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

---


### Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf">PutAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnyOf` <a name="PutAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf"></a>

```csharp
private void PutAnyOf(IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

---

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf">AnyOf</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf"></a>

```csharp
public Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList AnyOf { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a>

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] AnyOfInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>

---


### Apigatewayv2RoutingRuleConditionOutputReference <a name="Apigatewayv2RoutingRuleConditionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Apigatewayv2RoutingRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths">PutMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders">PutMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths">ResetMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders">ResetMatchHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchBasePaths` <a name="PutMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths"></a>

```csharp
private void PutMatchBasePaths(IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

---

##### `PutMatchHeaders` <a name="PutMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders"></a>

```csharp
private void PutMatchHeaders(IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

---

##### `ResetMatchBasePaths` <a name="ResetMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths"></a>

```csharp
private void ResetMatchBasePaths()
```

##### `ResetMatchHeaders` <a name="ResetMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders"></a>

```csharp
private void ResetMatchHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths">MatchBasePaths</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders">MatchHeaders</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput">MatchBasePathsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput">MatchHeadersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchBasePaths`<sup>Required</sup> <a name="MatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths"></a>

```csharp
public Apigatewayv2RoutingRuleConditionMatchBasePathsList MatchBasePaths { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a>

---

##### `MatchHeaders`<sup>Required</sup> <a name="MatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders"></a>

```csharp
public Apigatewayv2RoutingRuleConditionMatchHeadersList MatchHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a>

---

##### `MatchBasePathsInput`<sup>Optional</sup> <a name="MatchBasePathsInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths[] MatchBasePathsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>[]

---

##### `MatchHeadersInput`<sup>Optional</sup> <a name="MatchHeadersInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders[] MatchHeadersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Apigatewayv2RoutingRuleCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>

---



