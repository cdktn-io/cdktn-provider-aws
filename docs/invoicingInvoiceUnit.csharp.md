# `invoicingInvoiceUnit` Submodule <a name="`invoicingInvoiceUnit` Submodule" id="@cdktf/provider-aws.invoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingInvoiceUnit <a name="InvoicingInvoiceUnit" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit aws_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnit(Construct Scope, string Id, InvoicingInvoiceUnitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled">ResetTaxInheritanceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule"></a>

```csharp
private void PutRule(IResolvable|InvoicingInvoiceUnitRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts"></a>

```csharp
private void PutTimeouts(InvoicingInvoiceUnitTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaxInheritanceDisabled` <a name="ResetTaxInheritanceDisabled" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled"></a>

```csharp
private void ResetTaxInheritanceDisabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InvoicingInvoiceUnit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InvoicingInvoiceUnit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InvoicingInvoiceUnit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InvoicingInvoiceUnit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InvoicingInvoiceUnit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InvoicingInvoiceUnit resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InvoicingInvoiceUnit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput">InvoiceReceiverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput">RuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput">TaxInheritanceDisabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver">InvoiceReceiver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled">TaxInheritanceDisabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule"></a>

```csharp
public InvoicingInvoiceUnitRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts"></a>

```csharp
public InvoicingInvoiceUnitTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InvoiceReceiverInput`<sup>Optional</sup> <a name="InvoiceReceiverInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput"></a>

```csharp
public string InvoiceReceiverInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitRule[] RuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaxInheritanceDisabledInput`<sup>Optional</sup> <a name="TaxInheritanceDisabledInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput"></a>

```csharp
public bool|IResolvable TaxInheritanceDisabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InvoiceReceiver`<sup>Required</sup> <a name="InvoiceReceiver" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver"></a>

```csharp
public string InvoiceReceiver { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaxInheritanceDisabled`<sup>Required</sup> <a name="TaxInheritanceDisabled" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```csharp
public bool|IResolvable TaxInheritanceDisabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingInvoiceUnitConfig <a name="InvoicingInvoiceUnitConfig" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InvoiceReceiver,
    string Name,
    string Description = null,
    string Region = null,
    IResolvable|InvoicingInvoiceUnitRule[] Rule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    bool|IResolvable TaxInheritanceDisabled = null,
    InvoicingInvoiceUnitTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver">InvoiceReceiver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule">Rule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled">TaxInheritanceDisabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `InvoiceReceiver`<sup>Required</sup> <a name="InvoiceReceiver" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver"></a>

```csharp
public string InvoiceReceiver { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#region InvoicingInvoiceUnit#region}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitRule[] Rule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}.

---

##### `TaxInheritanceDisabled`<sup>Optional</sup> <a name="TaxInheritanceDisabled" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled"></a>

```csharp
public bool|IResolvable TaxInheritanceDisabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts"></a>

```csharp
public InvoicingInvoiceUnitTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#timeouts InvoicingInvoiceUnit#timeouts}

---

### InvoicingInvoiceUnitRule <a name="InvoicingInvoiceUnitRule" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnitRule {
    string[] LinkedAccounts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts">LinkedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}. |

---

##### `LinkedAccounts`<sup>Required</sup> <a name="LinkedAccounts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts"></a>

```csharp
public string[] LinkedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}.

---

### InvoicingInvoiceUnitTimeouts <a name="InvoicingInvoiceUnitTimeouts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnitTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#create InvoicingInvoiceUnit#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#delete InvoicingInvoiceUnit#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/invoicing_invoice_unit#update InvoicingInvoiceUnit#update}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingInvoiceUnitRuleList <a name="InvoicingInvoiceUnitRuleList" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnitRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get"></a>

```csharp
private InvoicingInvoiceUnitRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>[]

---


### InvoicingInvoiceUnitRuleOutputReference <a name="InvoicingInvoiceUnitRuleOutputReference" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnitRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput">LinkedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">LinkedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedAccountsInput`<sup>Optional</sup> <a name="LinkedAccountsInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput"></a>

```csharp
public string[] LinkedAccountsInput { get; }
```

- *Type:* string[]

---

##### `LinkedAccounts`<sup>Required</sup> <a name="LinkedAccounts" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```csharp
public string[] LinkedAccounts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

---


### InvoicingInvoiceUnitTimeoutsOutputReference <a name="InvoicingInvoiceUnitTimeoutsOutputReference" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InvoicingInvoiceUnitTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---



