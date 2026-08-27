# `sesv2MultiRegionEndpoint` Submodule <a name="`sesv2MultiRegionEndpoint` Submodule" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2MultiRegionEndpoint <a name="Sesv2MultiRegionEndpoint" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint aws_sesv2_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpoint(Construct Scope, string Id, Sesv2MultiRegionEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig">Sesv2MultiRegionEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig">Sesv2MultiRegionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails"></a>

```csharp
private void PutDetails(IResolvable|Sesv2MultiRegionEndpointDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(Sesv2MultiRegionEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2MultiRegionEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2MultiRegionEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2MultiRegionEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2MultiRegionEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2MultiRegionEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2MultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2MultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details">Details</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes">Routes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput">DetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details"></a>

```csharp
public Sesv2MultiRegionEndpointDetailsList Details { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a>

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes"></a>

```csharp
public Sesv2MultiRegionEndpointRoutesList Routes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts"></a>

```csharp
public Sesv2MultiRegionEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a>

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetails[] DetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2MultiRegionEndpointConfig <a name="Sesv2MultiRegionEndpointConfig" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointName,
    IResolvable|Sesv2MultiRegionEndpointDetails[] Details = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    Sesv2MultiRegionEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details">Details</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]</code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetails[] Details { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts"></a>

```csharp
public Sesv2MultiRegionEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

### Sesv2MultiRegionEndpointDetails <a name="Sesv2MultiRegionEndpointDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointDetails {
    IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails[] RoutesDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails">RoutesDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]</code> | routes_details block. |

---

##### `RoutesDetails`<sup>Optional</sup> <a name="RoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails[] RoutesDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

routes_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#routes_details Sesv2MultiRegionEndpoint#routes_details}

---

### Sesv2MultiRegionEndpointDetailsRoutesDetails <a name="Sesv2MultiRegionEndpointDetailsRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointDetailsRoutesDetails {
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}.

---

### Sesv2MultiRegionEndpointRoutes <a name="Sesv2MultiRegionEndpointRoutes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointRoutes {

};
```


### Sesv2MultiRegionEndpointTimeouts <a name="Sesv2MultiRegionEndpointTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#create Sesv2MultiRegionEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sesv2_multi_region_endpoint#delete Sesv2MultiRegionEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2MultiRegionEndpointDetailsList <a name="Sesv2MultiRegionEndpointDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get"></a>

```csharp
private Sesv2MultiRegionEndpointDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

---


### Sesv2MultiRegionEndpointDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails">PutRoutesDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails">ResetRoutesDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutesDetails` <a name="PutRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails"></a>

```csharp
private void PutRoutesDetails(IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

---

##### `ResetRoutesDetails` <a name="ResetRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails"></a>

```csharp
private void ResetRoutesDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails">RoutesDetails</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput">RoutesDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoutesDetails`<sup>Required</sup> <a name="RoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails"></a>

```csharp
public Sesv2MultiRegionEndpointDetailsRoutesDetailsList RoutesDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a>

---

##### `RoutesDetailsInput`<sup>Optional</sup> <a name="RoutesDetailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails[] RoutesDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsList <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointDetailsRoutesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get"></a>

```csharp
private Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointDetailsRoutesDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>

---


### Sesv2MultiRegionEndpointRoutesList <a name="Sesv2MultiRegionEndpointRoutesList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get"></a>

```csharp
private Sesv2MultiRegionEndpointRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Sesv2MultiRegionEndpointRoutesOutputReference <a name="Sesv2MultiRegionEndpointRoutesOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue"></a>

```csharp
public Sesv2MultiRegionEndpointRoutes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a>

---


### Sesv2MultiRegionEndpointTimeoutsOutputReference <a name="Sesv2MultiRegionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2MultiRegionEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Sesv2MultiRegionEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---



