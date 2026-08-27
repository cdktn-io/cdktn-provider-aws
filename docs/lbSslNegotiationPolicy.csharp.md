# `lbSslNegotiationPolicy` Submodule <a name="`lbSslNegotiationPolicy` Submodule" id="@cdktn/provider-aws.lbSslNegotiationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbSslNegotiationPolicy <a name="LbSslNegotiationPolicy" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy aws_lb_ssl_negotiation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LbSslNegotiationPolicy(Construct Scope, string Id, LbSslNegotiationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig">LbSslNegotiationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig">LbSslNegotiationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute"></a>

```csharp
private void PutAttribute(IResolvable|LbSslNegotiationPolicyAttribute[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LbSslNegotiationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LbSslNegotiationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LbSslNegotiationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LbSslNegotiationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LbSslNegotiationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LbSslNegotiationPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbSslNegotiationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbSslNegotiationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LbSslNegotiationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput">AttributeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput">LbPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort">LbPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute"></a>

```csharp
public LbSslNegotiationPolicyAttributeList Attribute { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput"></a>

```csharp
public IResolvable|LbSslNegotiationPolicyAttribute[] AttributeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbPortInput`<sup>Optional</sup> <a name="LbPortInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput"></a>

```csharp
public double LbPortInput { get; }
```

- *Type:* double

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput"></a>

```csharp
public string LoadBalancerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LbPort`<sup>Required</sup> <a name="LbPort" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort"></a>

```csharp
public double LbPort { get; }
```

- *Type:* double

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbSslNegotiationPolicyAttribute <a name="LbSslNegotiationPolicyAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LbSslNegotiationPolicyAttribute {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}.

---

### LbSslNegotiationPolicyConfig <a name="LbSslNegotiationPolicyConfig" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LbSslNegotiationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double LbPort,
    string LoadBalancer,
    string Name,
    IResolvable|LbSslNegotiationPolicyAttribute[] Attribute = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort">LbPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute">Attribute</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]</code> | attribute block. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LbPort`<sup>Required</sup> <a name="LbPort" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort"></a>

```csharp
public double LbPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}.

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute"></a>

```csharp
public IResolvable|LbSslNegotiationPolicyAttribute[] Attribute { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#attribute LbSslNegotiationPolicy#attribute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#region LbSslNegotiationPolicy#region}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbSslNegotiationPolicyAttributeList <a name="LbSslNegotiationPolicyAttributeList" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LbSslNegotiationPolicyAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get"></a>

```csharp
private LbSslNegotiationPolicyAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue"></a>

```csharp
public IResolvable|LbSslNegotiationPolicyAttribute[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

---


### LbSslNegotiationPolicyAttributeOutputReference <a name="LbSslNegotiationPolicyAttributeOutputReference" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LbSslNegotiationPolicyAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LbSslNegotiationPolicyAttribute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>

---



