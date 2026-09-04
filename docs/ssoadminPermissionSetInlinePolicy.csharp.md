# `ssoadminPermissionSetInlinePolicy` Submodule <a name="`ssoadminPermissionSetInlinePolicy` Submodule" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminPermissionSetInlinePolicy <a name="SsoadminPermissionSetInlinePolicy" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminPermissionSetInlinePolicy(Construct Scope, string Id, SsoadminPermissionSetInlinePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig">SsoadminPermissionSetInlinePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig">SsoadminPermissionSetInlinePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(SsoadminPermissionSetInlinePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsoadminPermissionSetInlinePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminPermissionSetInlinePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminPermissionSetInlinePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminPermissionSetInlinePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminPermissionSetInlinePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsoadminPermissionSetInlinePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminPermissionSetInlinePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminPermissionSetInlinePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsoadminPermissionSetInlinePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference">SsoadminPermissionSetInlinePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput">InlinePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy">InlinePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.timeouts"></a>

```csharp
public SsoadminPermissionSetInlinePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference">SsoadminPermissionSetInlinePolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InlinePolicyInput`<sup>Optional</sup> <a name="InlinePolicyInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput"></a>

```csharp
public string InlinePolicyInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput"></a>

```csharp
public string PermissionSetArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|SsoadminPermissionSetInlinePolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InlinePolicy`<sup>Required</sup> <a name="InlinePolicy" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy"></a>

```csharp
public string InlinePolicy { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminPermissionSetInlinePolicyConfig <a name="SsoadminPermissionSetInlinePolicyConfig" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminPermissionSetInlinePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InlinePolicy,
    string InstanceArn,
    string PermissionSetArn,
    string Id = null,
    string Region = null,
    SsoadminPermissionSetInlinePolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy">InlinePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InlinePolicy`<sup>Required</sup> <a name="InlinePolicy" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy"></a>

```csharp
public string InlinePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}.

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}.

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#region SsoadminPermissionSetInlinePolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.timeouts"></a>

```csharp
public SsoadminPermissionSetInlinePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#timeouts SsoadminPermissionSetInlinePolicy#timeouts}

---

### SsoadminPermissionSetInlinePolicyTimeouts <a name="SsoadminPermissionSetInlinePolicyTimeouts" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminPermissionSetInlinePolicyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#create SsoadminPermissionSetInlinePolicy#create}. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#delete SsoadminPermissionSetInlinePolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#create SsoadminPermissionSetInlinePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_permission_set_inline_policy#delete SsoadminPermissionSetInlinePolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminPermissionSetInlinePolicyTimeoutsOutputReference <a name="SsoadminPermissionSetInlinePolicyTimeoutsOutputReference" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminPermissionSetInlinePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsoadminPermissionSetInlinePolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyTimeouts">SsoadminPermissionSetInlinePolicyTimeouts</a>

---



