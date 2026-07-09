# `route53RecoverycontrolconfigControlPanel` Submodule <a name="`route53RecoverycontrolconfigControlPanel` Submodule" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigControlPanel <a name="Route53RecoverycontrolconfigControlPanel" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel aws_route53recoverycontrolconfig_control_panel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigControlPanel(Construct Scope, string Id, Route53RecoverycontrolconfigControlPanelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig">Route53RecoverycontrolconfigControlPanelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig">Route53RecoverycontrolconfigControlPanelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolconfigControlPanel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigControlPanel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoverycontrolconfigControlPanel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoverycontrolconfigControlPanel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoverycontrolconfigControlPanel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolconfigControlPanel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.defaultControlPanel">DefaultControlPanel</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.routingControlCount">RoutingControlCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultControlPanel`<sup>Required</sup> <a name="DefaultControlPanel" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.defaultControlPanel"></a>

```csharp
public IResolvable DefaultControlPanel { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RoutingControlCount`<sup>Required</sup> <a name="RoutingControlCount" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.routingControlCount"></a>

```csharp
public double RoutingControlCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigControlPanelConfig <a name="Route53RecoverycontrolconfigControlPanelConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigControlPanelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterArn,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#tags Route53RecoverycontrolconfigControlPanel#tags}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#tags_all Route53RecoverycontrolconfigControlPanel#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#tags Route53RecoverycontrolconfigControlPanel#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/route53recoverycontrolconfig_control_panel#tags_all Route53RecoverycontrolconfigControlPanel#tags_all}.

---



