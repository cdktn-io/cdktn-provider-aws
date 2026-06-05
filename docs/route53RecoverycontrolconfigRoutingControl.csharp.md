# `route53RecoverycontrolconfigRoutingControl` Submodule <a name="`route53RecoverycontrolconfigRoutingControl` Submodule" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigRoutingControl <a name="Route53RecoverycontrolconfigRoutingControl" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control aws_route53recoverycontrolconfig_routing_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigRoutingControl(Construct Scope, string Id, Route53RecoverycontrolconfigRoutingControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig">Route53RecoverycontrolconfigRoutingControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig">Route53RecoverycontrolconfigRoutingControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.resetControlPanelArn">ResetControlPanelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetControlPanelArn` <a name="ResetControlPanelArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.resetControlPanelArn"></a>

```csharp
private void ResetControlPanelArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolconfigRoutingControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigRoutingControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigRoutingControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigRoutingControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigRoutingControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoverycontrolconfigRoutingControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoverycontrolconfigRoutingControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoverycontrolconfigRoutingControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolconfigRoutingControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.controlPanelArnInput">ControlPanelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.controlPanelArn">ControlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `ControlPanelArnInput`<sup>Optional</sup> <a name="ControlPanelArnInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.controlPanelArnInput"></a>

```csharp
public string ControlPanelArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `ControlPanelArn`<sup>Required</sup> <a name="ControlPanelArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.controlPanelArn"></a>

```csharp
public string ControlPanelArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigRoutingControlConfig <a name="Route53RecoverycontrolconfigRoutingControlConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigRoutingControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterArn,
    string Name,
    string ControlPanelArn = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#cluster_arn Route53RecoverycontrolconfigRoutingControl#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#name Route53RecoverycontrolconfigRoutingControl#name}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.controlPanelArn">ControlPanelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#control_panel_arn Route53RecoverycontrolconfigRoutingControl#control_panel_arn}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#id Route53RecoverycontrolconfigRoutingControl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#cluster_arn Route53RecoverycontrolconfigRoutingControl#cluster_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#name Route53RecoverycontrolconfigRoutingControl#name}.

---

##### `ControlPanelArn`<sup>Optional</sup> <a name="ControlPanelArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.controlPanelArn"></a>

```csharp
public string ControlPanelArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#control_panel_arn Route53RecoverycontrolconfigRoutingControl#control_panel_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigRoutingControl.Route53RecoverycontrolconfigRoutingControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/route53recoverycontrolconfig_routing_control#id Route53RecoverycontrolconfigRoutingControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



