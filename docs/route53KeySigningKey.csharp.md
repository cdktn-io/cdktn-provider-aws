# `route53KeySigningKey` Submodule <a name="`route53KeySigningKey` Submodule" id="@cdktn/provider-aws.route53KeySigningKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53KeySigningKey <a name="Route53KeySigningKey" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key aws_route53_key_signing_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53KeySigningKey(Construct Scope, string Id, Route53KeySigningKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig">Route53KeySigningKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig">Route53KeySigningKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.putTimeouts"></a>

```csharp
private void PutTimeouts(Route53KeySigningKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53KeySigningKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53KeySigningKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53KeySigningKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53KeySigningKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53KeySigningKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53KeySigningKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53KeySigningKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53KeySigningKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53KeySigningKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic">DigestAlgorithmMnemonic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType">DigestAlgorithmType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestValue">DigestValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord">DnskeyRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dsRecord">DsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.flag">Flag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyTag">KeyTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic">SigningAlgorithmMnemonic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType">SigningAlgorithmType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference">Route53KeySigningKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput">KeyManagementServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn">KeyManagementServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DigestAlgorithmMnemonic`<sup>Required</sup> <a name="DigestAlgorithmMnemonic" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic"></a>

```csharp
public string DigestAlgorithmMnemonic { get; }
```

- *Type:* string

---

##### `DigestAlgorithmType`<sup>Required</sup> <a name="DigestAlgorithmType" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType"></a>

```csharp
public double DigestAlgorithmType { get; }
```

- *Type:* double

---

##### `DigestValue`<sup>Required</sup> <a name="DigestValue" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.digestValue"></a>

```csharp
public string DigestValue { get; }
```

- *Type:* string

---

##### `DnskeyRecord`<sup>Required</sup> <a name="DnskeyRecord" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord"></a>

```csharp
public string DnskeyRecord { get; }
```

- *Type:* string

---

##### `DsRecord`<sup>Required</sup> <a name="DsRecord" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.dsRecord"></a>

```csharp
public string DsRecord { get; }
```

- *Type:* string

---

##### `Flag`<sup>Required</sup> <a name="Flag" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.flag"></a>

```csharp
public double Flag { get; }
```

- *Type:* double

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyTag"></a>

```csharp
public double KeyTag { get; }
```

- *Type:* double

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `SigningAlgorithmMnemonic`<sup>Required</sup> <a name="SigningAlgorithmMnemonic" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic"></a>

```csharp
public string SigningAlgorithmMnemonic { get; }
```

- *Type:* string

---

##### `SigningAlgorithmType`<sup>Required</sup> <a name="SigningAlgorithmType" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType"></a>

```csharp
public double SigningAlgorithmType { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.timeouts"></a>

```csharp
public Route53KeySigningKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference">Route53KeySigningKeyTimeoutsOutputReference</a>

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput"></a>

```csharp
public string HostedZoneIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyManagementServiceArnInput`<sup>Optional</sup> <a name="KeyManagementServiceArnInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput"></a>

```csharp
public string KeyManagementServiceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.timeoutsInput"></a>

```csharp
public IResolvable|Route53KeySigningKeyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a>

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyManagementServiceArn`<sup>Required</sup> <a name="KeyManagementServiceArn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn"></a>

```csharp
public string KeyManagementServiceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53KeySigningKeyConfig <a name="Route53KeySigningKeyConfig" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53KeySigningKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string HostedZoneId,
    string KeyManagementServiceArn,
    string Name,
    string Id = null,
    string Status = null,
    Route53KeySigningKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn">KeyManagementServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#id Route53KeySigningKey#id}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}.

---

##### `KeyManagementServiceArn`<sup>Required</sup> <a name="KeyManagementServiceArn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn"></a>

```csharp
public string KeyManagementServiceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#id Route53KeySigningKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyConfig.property.timeouts"></a>

```csharp
public Route53KeySigningKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#timeouts Route53KeySigningKey#timeouts}

---

### Route53KeySigningKeyTimeouts <a name="Route53KeySigningKeyTimeouts" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53KeySigningKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#create Route53KeySigningKey#create}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#delete Route53KeySigningKey#delete}. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#update Route53KeySigningKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#create Route53KeySigningKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#delete Route53KeySigningKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/route53_key_signing_key#update Route53KeySigningKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53KeySigningKeyTimeoutsOutputReference <a name="Route53KeySigningKeyTimeoutsOutputReference" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53KeySigningKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53KeySigningKeyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.route53KeySigningKey.Route53KeySigningKeyTimeouts">Route53KeySigningKeyTimeouts</a>

---



