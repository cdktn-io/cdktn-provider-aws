# `lightsailLbCertificate` Submodule <a name="`lightsailLbCertificate` Submodule" id="@cdktn/provider-aws.lightsailLbCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLbCertificate <a name="LightsailLbCertificate" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate aws_lightsail_lb_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailLbCertificate(Construct Scope, string Id, LightsailLbCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig">LightsailLbCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig">LightsailLbCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLbCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailLbCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailLbCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailLbCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailLbCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailLbCertificate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailLbCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailLbCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLbCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.domainValidationRecords">DomainValidationRecords</a></code> | <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList">LightsailLbCertificateDomainValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.supportCode">SupportCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.lbNameInput">LbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.lbName">LbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DomainValidationRecords`<sup>Required</sup> <a name="DomainValidationRecords" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.domainValidationRecords"></a>

```csharp
public LightsailLbCertificateDomainValidationRecordsList DomainValidationRecords { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList">LightsailLbCertificateDomainValidationRecordsList</a>

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.supportCode"></a>

```csharp
public string SupportCode { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbNameInput`<sup>Optional</sup> <a name="LbNameInput" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.lbNameInput"></a>

```csharp
public string LbNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.subjectAlternativeNamesInput"></a>

```csharp
public string[] SubjectAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LbName`<sup>Required</sup> <a name="LbName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.lbName"></a>

```csharp
public string LbName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLbCertificateConfig <a name="LightsailLbCertificateConfig" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailLbCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LbName,
    string Name,
    string DomainName = null,
    string Id = null,
    string Region = null,
    string[] SubjectAlternativeNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.lbName">LbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#lb_name LightsailLbCertificate#lb_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#name LightsailLbCertificate#name}. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#domain_name LightsailLbCertificate#domain_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#id LightsailLbCertificate#id}. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#subject_alternative_names LightsailLbCertificate#subject_alternative_names}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LbName`<sup>Required</sup> <a name="LbName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.lbName"></a>

```csharp
public string LbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#lb_name LightsailLbCertificate#lb_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#name LightsailLbCertificate#name}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#domain_name LightsailLbCertificate#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#id LightsailLbCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#region LightsailLbCertificate#region}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateConfig.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/lightsail_lb_certificate#subject_alternative_names LightsailLbCertificate#subject_alternative_names}.

---

### LightsailLbCertificateDomainValidationRecords <a name="LightsailLbCertificateDomainValidationRecords" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailLbCertificateDomainValidationRecords {

};
```


## Classes <a name="Classes" id="Classes"></a>

### LightsailLbCertificateDomainValidationRecordsList <a name="LightsailLbCertificateDomainValidationRecordsList" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailLbCertificateDomainValidationRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.get"></a>

```csharp
private LightsailLbCertificateDomainValidationRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LightsailLbCertificateDomainValidationRecordsOutputReference <a name="LightsailLbCertificateDomainValidationRecordsOutputReference" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailLbCertificateDomainValidationRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.resourceRecordName">ResourceRecordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.resourceRecordType">ResourceRecordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.resourceRecordValue">ResourceRecordValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecords">LightsailLbCertificateDomainValidationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `ResourceRecordName`<sup>Required</sup> <a name="ResourceRecordName" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.resourceRecordName"></a>

```csharp
public string ResourceRecordName { get; }
```

- *Type:* string

---

##### `ResourceRecordType`<sup>Required</sup> <a name="ResourceRecordType" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.resourceRecordType"></a>

```csharp
public string ResourceRecordType { get; }
```

- *Type:* string

---

##### `ResourceRecordValue`<sup>Required</sup> <a name="ResourceRecordValue" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.resourceRecordValue"></a>

```csharp
public string ResourceRecordValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecordsOutputReference.property.internalValue"></a>

```csharp
public LightsailLbCertificateDomainValidationRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lightsailLbCertificate.LightsailLbCertificateDomainValidationRecords">LightsailLbCertificateDomainValidationRecords</a>

---



