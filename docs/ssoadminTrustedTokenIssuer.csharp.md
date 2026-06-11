# `ssoadminTrustedTokenIssuer` Submodule <a name="`ssoadminTrustedTokenIssuer` Submodule" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminTrustedTokenIssuer <a name="SsoadminTrustedTokenIssuer" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer aws_ssoadmin_trusted_token_issuer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuer(Construct Scope, string Id, SsoadminTrustedTokenIssuerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig">SsoadminTrustedTokenIssuerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig">SsoadminTrustedTokenIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration">PutTrustedTokenIssuerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTrustedTokenIssuerConfiguration">ResetTrustedTokenIssuerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTrustedTokenIssuerConfiguration` <a name="PutTrustedTokenIssuerConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration"></a>

```csharp
private void PutTrustedTokenIssuerConfiguration(IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.putTrustedTokenIssuerConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrustedTokenIssuerConfiguration` <a name="ResetTrustedTokenIssuerConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.resetTrustedTokenIssuerConfiguration"></a>

```csharp
private void ResetTrustedTokenIssuerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminTrustedTokenIssuer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminTrustedTokenIssuer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminTrustedTokenIssuer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminTrustedTokenIssuer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsoadminTrustedTokenIssuer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminTrustedTokenIssuer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminTrustedTokenIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsoadminTrustedTokenIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfiguration">TrustedTokenIssuerConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfigurationInput">TrustedTokenIssuerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerTypeInput">TrustedTokenIssuerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerType">TrustedTokenIssuerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TrustedTokenIssuerConfiguration`<sup>Required</sup> <a name="TrustedTokenIssuerConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfiguration"></a>

```csharp
public SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList TrustedTokenIssuerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList</a>

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrustedTokenIssuerConfigurationInput`<sup>Optional</sup> <a name="TrustedTokenIssuerConfigurationInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerConfigurationInput"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] TrustedTokenIssuerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

---

##### `TrustedTokenIssuerTypeInput`<sup>Optional</sup> <a name="TrustedTokenIssuerTypeInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerTypeInput"></a>

```csharp
public string TrustedTokenIssuerTypeInput { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrustedTokenIssuerType`<sup>Required</sup> <a name="TrustedTokenIssuerType" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.trustedTokenIssuerType"></a>

```csharp
public string TrustedTokenIssuerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminTrustedTokenIssuerConfig <a name="SsoadminTrustedTokenIssuerConfig" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string Name,
    string TrustedTokenIssuerType,
    string ClientToken = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] TrustedTokenIssuerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerType">TrustedTokenIssuerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerConfiguration">TrustedTokenIssuerConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]</code> | trusted_token_issuer_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#instance_arn SsoadminTrustedTokenIssuer#instance_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#name SsoadminTrustedTokenIssuer#name}.

---

##### `TrustedTokenIssuerType`<sup>Required</sup> <a name="TrustedTokenIssuerType" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerType"></a>

```csharp
public string TrustedTokenIssuerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_type SsoadminTrustedTokenIssuer#trusted_token_issuer_type}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#client_token SsoadminTrustedTokenIssuer#client_token}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#region SsoadminTrustedTokenIssuer#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#tags SsoadminTrustedTokenIssuer#tags}.

---

##### `TrustedTokenIssuerConfiguration`<sup>Optional</sup> <a name="TrustedTokenIssuerConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerConfig.property.trustedTokenIssuerConfiguration"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] TrustedTokenIssuerConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

trusted_token_issuer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#trusted_token_issuer_configuration SsoadminTrustedTokenIssuer#trusted_token_issuer_configuration}

---

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration {
    IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] OidcJwtConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.property.oidcJwtConfiguration">OidcJwtConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]</code> | oidc_jwt_configuration block. |

---

##### `OidcJwtConfiguration`<sup>Optional</sup> <a name="OidcJwtConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration.property.oidcJwtConfiguration"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] OidcJwtConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

oidc_jwt_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#oidc_jwt_configuration SsoadminTrustedTokenIssuer#oidc_jwt_configuration}

---

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration {
    string ClaimAttributePath,
    string IdentityStoreAttributePath,
    string IssuerUrl,
    string JwksRetrievalOption
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.claimAttributePath">ClaimAttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.identityStoreAttributePath">IdentityStoreAttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.jwksRetrievalOption">JwksRetrievalOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}. |

---

##### `ClaimAttributePath`<sup>Required</sup> <a name="ClaimAttributePath" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.claimAttributePath"></a>

```csharp
public string ClaimAttributePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#claim_attribute_path SsoadminTrustedTokenIssuer#claim_attribute_path}.

---

##### `IdentityStoreAttributePath`<sup>Required</sup> <a name="IdentityStoreAttributePath" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.identityStoreAttributePath"></a>

```csharp
public string IdentityStoreAttributePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#identity_store_attribute_path SsoadminTrustedTokenIssuer#identity_store_attribute_path}.

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#issuer_url SsoadminTrustedTokenIssuer#issuer_url}.

---

##### `JwksRetrievalOption`<sup>Required</sup> <a name="JwksRetrievalOption" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration.property.jwksRetrievalOption"></a>

```csharp
public string JwksRetrievalOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ssoadmin_trusted_token_issuer#jwks_retrieval_option SsoadminTrustedTokenIssuer#jwks_retrieval_option}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get"></a>

```csharp
private SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>[]

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get"></a>

```csharp
private SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePathInput">ClaimAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePathInput">IdentityStoreAttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOptionInput">JwksRetrievalOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePath">ClaimAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePath">IdentityStoreAttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOption">JwksRetrievalOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimAttributePathInput`<sup>Optional</sup> <a name="ClaimAttributePathInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePathInput"></a>

```csharp
public string ClaimAttributePathInput { get; }
```

- *Type:* string

---

##### `IdentityStoreAttributePathInput`<sup>Optional</sup> <a name="IdentityStoreAttributePathInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePathInput"></a>

```csharp
public string IdentityStoreAttributePathInput { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `JwksRetrievalOptionInput`<sup>Optional</sup> <a name="JwksRetrievalOptionInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOptionInput"></a>

```csharp
public string JwksRetrievalOptionInput { get; }
```

- *Type:* string

---

##### `ClaimAttributePath`<sup>Required</sup> <a name="ClaimAttributePath" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.claimAttributePath"></a>

```csharp
public string ClaimAttributePath { get; }
```

- *Type:* string

---

##### `IdentityStoreAttributePath`<sup>Required</sup> <a name="IdentityStoreAttributePath" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.identityStoreAttributePath"></a>

```csharp
public string IdentityStoreAttributePath { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `JwksRetrievalOption`<sup>Required</sup> <a name="JwksRetrievalOption" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.jwksRetrievalOption"></a>

```csharp
public string JwksRetrievalOption { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>

---


### SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference <a name="SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration">PutOidcJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resetOidcJwtConfiguration">ResetOidcJwtConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOidcJwtConfiguration` <a name="PutOidcJwtConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration"></a>

```csharp
private void PutOidcJwtConfiguration(IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.putOidcJwtConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

---

##### `ResetOidcJwtConfiguration` <a name="ResetOidcJwtConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.resetOidcJwtConfiguration"></a>

```csharp
private void ResetOidcJwtConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfiguration">OidcJwtConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfigurationInput">OidcJwtConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OidcJwtConfiguration`<sup>Required</sup> <a name="OidcJwtConfiguration" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfiguration"></a>

```csharp
public SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList OidcJwtConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfigurationList</a>

---

##### `OidcJwtConfigurationInput`<sup>Optional</sup> <a name="OidcJwtConfigurationInput" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.oidcJwtConfigurationInput"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration[] OidcJwtConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOidcJwtConfiguration</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminTrustedTokenIssuer.SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration">SsoadminTrustedTokenIssuerTrustedTokenIssuerConfiguration</a>

---



