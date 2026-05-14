# `servicecatalogPortfolioShare` Submodule <a name="`servicecatalogPortfolioShare` Submodule" id="@cdktn/provider-aws.servicecatalogPortfolioShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolioShare <a name="ServicecatalogPortfolioShare" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share aws_servicecatalog_portfolio_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogPortfolioShare(Construct Scope, string Id, ServicecatalogPortfolioShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig">ServicecatalogPortfolioShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig">ServicecatalogPortfolioShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetSharePrincipals">ResetSharePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetShareTagOptions">ResetShareTagOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetWaitForAcceptance">ResetWaitForAcceptance</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicecatalogPortfolioShareTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSharePrincipals` <a name="ResetSharePrincipals" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetSharePrincipals"></a>

```csharp
private void ResetSharePrincipals()
```

##### `ResetShareTagOptions` <a name="ResetShareTagOptions" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetShareTagOptions"></a>

```csharp
private void ResetShareTagOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitForAcceptance` <a name="ResetWaitForAcceptance" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.resetWaitForAcceptance"></a>

```csharp
private void ResetWaitForAcceptance()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogPortfolioShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogPortfolioShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogPortfolioShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogPortfolioShare.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogPortfolioShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogPortfolioShare resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogPortfolioShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogPortfolioShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogPortfolioShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.accepted">Accepted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference">ServicecatalogPortfolioShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipalsInput">SharePrincipalsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptionsInput">ShareTagOptionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptanceInput">WaitForAcceptanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipals">SharePrincipals</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptions">ShareTagOptions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptance">WaitForAcceptance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accepted`<sup>Required</sup> <a name="Accepted" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.accepted"></a>

```csharp
public IResolvable Accepted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeouts"></a>

```csharp
public ServicecatalogPortfolioShareTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference">ServicecatalogPortfolioShareTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SharePrincipalsInput`<sup>Optional</sup> <a name="SharePrincipalsInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipalsInput"></a>

```csharp
public bool|IResolvable SharePrincipalsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ShareTagOptionsInput`<sup>Optional</sup> <a name="ShareTagOptionsInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptionsInput"></a>

```csharp
public bool|IResolvable ShareTagOptionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicecatalogPortfolioShareTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WaitForAcceptanceInput`<sup>Optional</sup> <a name="WaitForAcceptanceInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptanceInput"></a>

```csharp
public bool|IResolvable WaitForAcceptanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SharePrincipals`<sup>Required</sup> <a name="SharePrincipals" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.sharePrincipals"></a>

```csharp
public bool|IResolvable SharePrincipals { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ShareTagOptions`<sup>Required</sup> <a name="ShareTagOptions" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.shareTagOptions"></a>

```csharp
public bool|IResolvable ShareTagOptions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WaitForAcceptance`<sup>Required</sup> <a name="WaitForAcceptance" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.waitForAcceptance"></a>

```csharp
public bool|IResolvable WaitForAcceptance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioShareConfig <a name="ServicecatalogPortfolioShareConfig" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogPortfolioShareConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortfolioId,
    string PrincipalId,
    string Type,
    string AcceptLanguage = null,
    string Id = null,
    string Region = null,
    bool|IResolvable SharePrincipals = null,
    bool|IResolvable ShareTagOptions = null,
    ServicecatalogPortfolioShareTimeouts Timeouts = null,
    bool|IResolvable WaitForAcceptance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#portfolio_id ServicecatalogPortfolioShare#portfolio_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#principal_id ServicecatalogPortfolioShare#principal_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#type ServicecatalogPortfolioShare#type}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#accept_language ServicecatalogPortfolioShare#accept_language}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#id ServicecatalogPortfolioShare#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.sharePrincipals">SharePrincipals</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#share_principals ServicecatalogPortfolioShare#share_principals}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.shareTagOptions">ShareTagOptions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#share_tag_options ServicecatalogPortfolioShare#share_tag_options}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.waitForAcceptance">WaitForAcceptance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#portfolio_id ServicecatalogPortfolioShare#portfolio_id}.

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#principal_id ServicecatalogPortfolioShare#principal_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#type ServicecatalogPortfolioShare#type}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#accept_language ServicecatalogPortfolioShare#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#id ServicecatalogPortfolioShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#region ServicecatalogPortfolioShare#region}

---

##### `SharePrincipals`<sup>Optional</sup> <a name="SharePrincipals" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.sharePrincipals"></a>

```csharp
public bool|IResolvable SharePrincipals { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#share_principals ServicecatalogPortfolioShare#share_principals}.

---

##### `ShareTagOptions`<sup>Optional</sup> <a name="ShareTagOptions" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.shareTagOptions"></a>

```csharp
public bool|IResolvable ShareTagOptions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#share_tag_options ServicecatalogPortfolioShare#share_tag_options}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.timeouts"></a>

```csharp
public ServicecatalogPortfolioShareTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#timeouts ServicecatalogPortfolioShare#timeouts}

---

##### `WaitForAcceptance`<sup>Optional</sup> <a name="WaitForAcceptance" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareConfig.property.waitForAcceptance"></a>

```csharp
public bool|IResolvable WaitForAcceptance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}.

---

### ServicecatalogPortfolioShareTimeouts <a name="ServicecatalogPortfolioShareTimeouts" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogPortfolioShareTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#create ServicecatalogPortfolioShare#create}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#delete ServicecatalogPortfolioShare#delete}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#read ServicecatalogPortfolioShare#read}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#update ServicecatalogPortfolioShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#create ServicecatalogPortfolioShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#delete ServicecatalogPortfolioShare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#read ServicecatalogPortfolioShare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/servicecatalog_portfolio_share#update ServicecatalogPortfolioShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogPortfolioShareTimeoutsOutputReference <a name="ServicecatalogPortfolioShareTimeoutsOutputReference" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogPortfolioShareTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogPortfolioShareTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogPortfolioShare.ServicecatalogPortfolioShareTimeouts">ServicecatalogPortfolioShareTimeouts</a>

---



