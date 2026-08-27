# `servicecatalogProductPortfolioAssociation` Submodule <a name="`servicecatalogProductPortfolioAssociation` Submodule" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProductPortfolioAssociation <a name="ServicecatalogProductPortfolioAssociation" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogProductPortfolioAssociation(Construct Scope, string Id, ServicecatalogProductPortfolioAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId">ResetSourcePortfolioId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicecatalogProductPortfolioAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSourcePortfolioId` <a name="ResetSourcePortfolioId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId"></a>

```csharp
private void ResetSourcePortfolioId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogProductPortfolioAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogProductPortfolioAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogProductPortfolioAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogProductPortfolioAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogProductPortfolioAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogProductPortfolioAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogProductPortfolioAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogProductPortfolioAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogProductPortfolioAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput">SourcePortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId">SourcePortfolioId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeouts"></a>

```csharp
public ServicecatalogProductPortfolioAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference">ServicecatalogProductPortfolioAssociationTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SourcePortfolioIdInput`<sup>Optional</sup> <a name="SourcePortfolioIdInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput"></a>

```csharp
public string SourcePortfolioIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicecatalogProductPortfolioAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourcePortfolioId`<sup>Required</sup> <a name="SourcePortfolioId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId"></a>

```csharp
public string SourcePortfolioId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductPortfolioAssociationConfig <a name="ServicecatalogProductPortfolioAssociationConfig" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogProductPortfolioAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortfolioId,
    string ProductId,
    string AcceptLanguage = null,
    string Id = null,
    string Region = null,
    string SourcePortfolioId = null,
    ServicecatalogProductPortfolioAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId">SourcePortfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}.

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#region ServicecatalogProductPortfolioAssociation#region}

---

##### `SourcePortfolioId`<sup>Optional</sup> <a name="SourcePortfolioId" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId"></a>

```csharp
public string SourcePortfolioId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.timeouts"></a>

```csharp
public ServicecatalogProductPortfolioAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#timeouts ServicecatalogProductPortfolioAssociation#timeouts}

---

### ServicecatalogProductPortfolioAssociationTimeouts <a name="ServicecatalogProductPortfolioAssociationTimeouts" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogProductPortfolioAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProductPortfolioAssociationTimeoutsOutputReference <a name="ServicecatalogProductPortfolioAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogProductPortfolioAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogProductPortfolioAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationTimeouts">ServicecatalogProductPortfolioAssociationTimeouts</a>

---



