# `apiGatewayDomainNameAccessAssociation` Submodule <a name="`apiGatewayDomainNameAccessAssociation` Submodule" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainNameAccessAssociation <a name="ApiGatewayDomainNameAccessAssociation" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameAccessAssociation(Construct Scope, string Id, ApiGatewayDomainNameAccessAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig">ApiGatewayDomainNameAccessAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig">ApiGatewayDomainNameAccessAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainNameAccessAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainNameAccessAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainNameAccessAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApiGatewayDomainNameAccessAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayDomainNameAccessAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayDomainNameAccessAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiGatewayDomainNameAccessAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceInput">AccessAssociationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput">AccessAssociationSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArnInput">DomainNameArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSource">AccessAssociationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceType">AccessAssociationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AccessAssociationSourceInput`<sup>Optional</sup> <a name="AccessAssociationSourceInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceInput"></a>

```csharp
public string AccessAssociationSourceInput { get; }
```

- *Type:* string

---

##### `AccessAssociationSourceTypeInput`<sup>Optional</sup> <a name="AccessAssociationSourceTypeInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput"></a>

```csharp
public string AccessAssociationSourceTypeInput { get; }
```

- *Type:* string

---

##### `DomainNameArnInput`<sup>Optional</sup> <a name="DomainNameArnInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArnInput"></a>

```csharp
public string DomainNameArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccessAssociationSource`<sup>Required</sup> <a name="AccessAssociationSource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSource"></a>

```csharp
public string AccessAssociationSource { get; }
```

- *Type:* string

---

##### `AccessAssociationSourceType`<sup>Required</sup> <a name="AccessAssociationSourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceType"></a>

```csharp
public string AccessAssociationSourceType { get; }
```

- *Type:* string

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameAccessAssociationConfig <a name="ApiGatewayDomainNameAccessAssociationConfig" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApiGatewayDomainNameAccessAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessAssociationSource,
    string AccessAssociationSourceType,
    string DomainNameArn,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSource">AccessAssociationSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType">AccessAssociationSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}. |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessAssociationSource`<sup>Required</sup> <a name="AccessAssociationSource" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSource"></a>

```csharp
public string AccessAssociationSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}.

---

##### `AccessAssociationSourceType`<sup>Required</sup> <a name="AccessAssociationSourceType" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType"></a>

```csharp
public string AccessAssociationSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}.

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#region ApiGatewayDomainNameAccessAssociation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}.

---



