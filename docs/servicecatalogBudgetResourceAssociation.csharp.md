# `servicecatalogBudgetResourceAssociation` Submodule <a name="`servicecatalogBudgetResourceAssociation` Submodule" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogBudgetResourceAssociation <a name="ServicecatalogBudgetResourceAssociation" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association aws_servicecatalog_budget_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogBudgetResourceAssociation(Construct Scope, string Id, ServicecatalogBudgetResourceAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig">ServicecatalogBudgetResourceAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig">ServicecatalogBudgetResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicecatalogBudgetResourceAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogBudgetResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogBudgetResourceAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogBudgetResourceAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogBudgetResourceAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicecatalogBudgetResourceAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogBudgetResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogBudgetResourceAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogBudgetResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogBudgetResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference">ServicecatalogBudgetResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetNameInput">BudgetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetName">BudgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeouts"></a>

```csharp
public ServicecatalogBudgetResourceAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference">ServicecatalogBudgetResourceAssociationTimeoutsOutputReference</a>

---

##### `BudgetNameInput`<sup>Optional</sup> <a name="BudgetNameInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetNameInput"></a>

```csharp
public string BudgetNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicecatalogBudgetResourceAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.budgetName"></a>

```csharp
public string BudgetName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogBudgetResourceAssociationConfig <a name="ServicecatalogBudgetResourceAssociationConfig" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogBudgetResourceAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BudgetName,
    string ResourceId,
    string Id = null,
    string Region = null,
    ServicecatalogBudgetResourceAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.budgetName">BudgetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#budget_name ServicecatalogBudgetResourceAssociation#budget_name}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#resource_id ServicecatalogBudgetResourceAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#id ServicecatalogBudgetResourceAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.budgetName"></a>

```csharp
public string BudgetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#budget_name ServicecatalogBudgetResourceAssociation#budget_name}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#resource_id ServicecatalogBudgetResourceAssociation#resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#id ServicecatalogBudgetResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#region ServicecatalogBudgetResourceAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationConfig.property.timeouts"></a>

```csharp
public ServicecatalogBudgetResourceAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#timeouts ServicecatalogBudgetResourceAssociation#timeouts}

---

### ServicecatalogBudgetResourceAssociationTimeouts <a name="ServicecatalogBudgetResourceAssociationTimeouts" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogBudgetResourceAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#create ServicecatalogBudgetResourceAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#delete ServicecatalogBudgetResourceAssociation#delete}. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#read ServicecatalogBudgetResourceAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#create ServicecatalogBudgetResourceAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#delete ServicecatalogBudgetResourceAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/servicecatalog_budget_resource_association#read ServicecatalogBudgetResourceAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogBudgetResourceAssociationTimeoutsOutputReference <a name="ServicecatalogBudgetResourceAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicecatalogBudgetResourceAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicecatalogBudgetResourceAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.servicecatalogBudgetResourceAssociation.ServicecatalogBudgetResourceAssociationTimeouts">ServicecatalogBudgetResourceAssociationTimeouts</a>

---



